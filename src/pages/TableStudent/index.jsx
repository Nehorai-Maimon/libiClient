import styles from "./style.module.css"
import students from '../../fakeData'
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Select from "../../components/common/Select";
import Input from "../../components/common/Input";
import emailjs from 'emailjs-com'
import { CSVLink } from "react-csv";





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
    const [services, setServices] = useState("שירותים")
    // const csvData =
    //     filterStudents;

    let studentsToDownload = []
    filterStudents.map(e => {
        return (
            studentsToDownload.push({ תז: e.id, שם: e.firstName, שם_משפחה: e.lastName, מין: e.gender, איש_קשר: e.contact[0].contactFirstName + " " + e.contact[0].contactLastName + "-" + e.contact[0].relative, איש_קשר_טלפון: e.contact[0].contactPhone, שירותים: e.arrServices })
        )
    })
    // console.log(studentsToDownload);
    const csvData =
        studentsToDownload;

    useEffect(() => {
        let res = students.filter((e, i) =>
            services !== "שירותים" && gender === "מין" ? e?.arrServices?.includes(services) && getAge(e.date.split("/").reverse().join("/")) <= ageMax && getAge(e.date.split("/").reverse().join("/")) >= ageMin :
                services !== "שירותים" ? e?.arrServices?.includes(services) && e.gender === gender && getAge(e.date.split("/").reverse().join("/")) <= ageMax && getAge(e.date.split("/").reverse().join("/")) >= ageMin :
                    gender !== "מין" ? e.gender === gender && getAge(e.date.split("/").reverse().join("/")) <= ageMax && getAge(e.date.split("/").reverse().join("/")) >= ageMin :
                        getAge(e.date.split("/").reverse().join("/")) <= ageMax && getAge(e.date.split("/").reverse().join("/")) >= ageMin)
        setFilterStudentd(res)
    }, [gender, ageMin, ageMax, services])


    const filterSearch = (value) => {
        setFilterStudentd(students.filter(e => e.firstName.includes(value) || e.lastName.includes(value))
        )
    }

    const resate = () => {
        setFilterStudentd(students)

    }

    let options = []
    for (let i = 1; i <= 120; i++) {
        options.push(i)
    }

    const servicesOp = ["שירותים", "תעסוקה", "דיור", "מעון", "מועדונית"]

    function sendEmail(to_name,
        message,
        to_email,) {

        emailjs.send("michal12345", "template_rbnr5tr",
            {
                to_name,
                message,
                to_email,

            },
            "gmKs6WXjj7TUG7mWV")

            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

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
                        <Select className={styles.select} placeholder={"שירותים"} options={servicesOp} onChange={(e) => setServices(e.target.value)} />
                    </div>
                    <div className={styles.search}>
                        <Input placeholder={"...חיפוש"} name={"search"} onChange={(e) => filterSearch(e.target.value)} />
                        <button onClick={resate}>הצג את כולם</button>


                        <CSVLink data={csvData}>Download me</CSVLink>
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
                        {/* <th>שירותים</th> */}
                        <th>מסמכים ואישורים</th>
                        <th>עריכה</th>
                        <th>שליחת תזכורת</th>
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
                                    {/* <td>{val.arrServices?.map(e => ` ${e} *`)}</td> */}
                                    <td>{"??"}</td>
                                    <td><button onClick={() => navigate('/edit')}>📝</button></td>
                                    <td><button onClick={() => sendEmail(val.firstName, val.file.map(e => "   *   " + e.fileName), val.email)}>✉️</button></td>
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
