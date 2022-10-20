import styles from "./style.module.css"
import students from '../../fakeData'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Select from "../../components/common/Select";
import Input from "../../components/common/Input";



function Table() {
    let navigate = useNavigate();

    //age
    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const [filterStudents, setFilterStudentd] = useState(students)
    const [gender, setGender] = useState("מין")
    const [ageMin, setAgeMin] = useState(1)
    const [ageMax, setAgeMax] = useState(120)


    useEffect(() => {
        let res = students.filter((e, i) => gender !== "מין" ? e.gender === gender && getAge(e.date.split("/").reverse().join("/")) <= ageMax && getAge(e.date.split("/").reverse().join("/")) >= ageMin :
            getAge(e.date.split("/").reverse().join("/")) <= ageMax && getAge(e.date.split("/").reverse().join("/")) >= ageMin)
        setFilterStudentd(res)
    }, [gender, ageMin, ageMax])


    const filterSearch = (value) => {
        setFilterStudentd(students.filter(e => e.firstName.includes(value) || e.lastName.includes(value))
        )
    }

    let options = []
    for (let i = 1; i <= 120; i++) {
        options.push(i)
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.filters}>
                    <div className={styles.subfilter}>
                        <button onClick={() => navigate('/new')}>➕</button>
                        <Select className={styles.select} placeholder={"מין"} options={["מין", "זכר", "נקבה"]} name={"gender"} onChange={(e) => setGender(e.target.value)} />
                        <Select className={styles.select} placeholder={"מגיל"} options={options} onChange={(e) => setAgeMin(e.target.value)} />
                        <Select className={styles.select} placeholder={"עד גיל"} options={options} onChange={(e) => setAgeMax(e.target.value)} />
                    </div>
                    <div className={styles.search}>
                        <Input placeholder={"...חיפוש"} name={"search"} onChange={(e) => filterSearch(e.target.value)} />
                        <button onClick={() => setFilterStudentd(students)}>הצג את כולם</button>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>תעודת זהות</th>
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                        <th>גיל</th>
                        <th>מין</th>
                        <th>איש קשר</th>
                        <th>טלפון</th>
                        <th>מסמכים ואישורים</th>
                        <th>עריכה</th>
                    </tr>
                    {filterStudents.length === 0 ? <div className={styles.noResult}>אין תוצאות מתאימות</div> :

                        filterStudents.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{getAge(val.date.split("/").reverse().join("/"))}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.contact[0].contactFirstName} {val.contact[0].contactLastName}-{val.contact[0].relative}</td>
                                    <td>{val.contact[0].contactPhone}</td>
                                    <td>{"??"}</td>
                                    <td><button onClick={() => navigate('/edit')}>📝</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default Table;
