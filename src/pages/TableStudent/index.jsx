import styles from "./style.module.css"
// import { students } from '../../fakeData'
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import Select from "../../components/common/Select";
import Input from "../../components/common/Input";
import emailjs from 'emailjs-com'
import { CSVLink } from "react-csv";
import excel_icon from '../../images/Excel.png'
import StudentContext from "../../context/StudentContext";

function Table() {
    const [students, setStudents] = useState()
    const [studentWithExpiration, setStudentWithExpiration] = useState()
    const [filterStudents, setFilterStudentd] = useState()
    const token = JSON.parse(localStorage.getItem('token'))
    // לשאול את מיכל איך להציג רק חניכים עם פג תוקף
    useEffect(() => {
        fetch('http://localhost:4000/student', {
            headers: { "token": `bearer ${token}` }
        })
            .then((response) => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error:', error));

        fetch('http://localhost:4000/student/studentWithExpiration', {
            headers: { "token": `bearer ${token}` }
        })
            .then((response) => response.json())
            .then(data => setStudentWithExpiration(data))
            .catch(error => console.error('Error:', error));
    }, [])

    useEffect(() => { setFilterStudentd(students) }, [students])

    const navigate = useNavigate();
    const { setStudent } = useContext(StudentContext)

    // מערכים של טפסי החובה, לפי שירות
    const gerneralFiles = ["צילום ת.ז הורה/ילד", "ויתור סודיות"]
    const employmentFiles = ["תעודת נכה", "ויתור סודיות"]
    const daycareFiles = ["ריפוי בעיסוק", "קלינאית תקשורת"]

    //age
    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        const age = today.getFullYear() - birthDate.getFullYear();
        // const m = today.getMonth() - birthDate.getMonth();
        // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        //     age--;
        // }
        return age;
    }
    const [gender, setGender] = useState("מין")
    const [ageMin, setAgeMin] = useState(1)
    const [ageMax, setAgeMax] = useState(120)
    const [services, setServices] = useState("שירותים")
    const [city, setCity] = useState("ישוב")
    // const csvData =
    //     filterStudents;

    let studentsToDownload = []
    filterStudents?.map(e => {
        return (
            studentsToDownload.push({ תז: e.id, שם: e.firstName, שם_משפחה: e.lastName, מין: e.gender, איש_קשר: e.contact[0].contactFirstName + " " + e.contact[0].contactLastName + "-" + e.contact[0].relative, איש_קשר_טלפון: e.contact[0].contactPhone, שירותים: e.arrServices })
        )
    })
    // console.log(studentsToDownload);
    const csvData =
        studentsToDownload;

    useEffect(() => {
        let res = students?.filter((e, i) =>
            city !== "ישוב" && services === "שירותים" && gender === "מין" ? e?.address?.city === city && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                city !== "ישוב" && services === "שירותים" && gender !== "מין" ? e?.address?.city === city && e.gender === gender && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                    services !== "שירותים" && city !== "ישוב" && gender === "מין" ? e?.arrServices?.includes(services) && e?.address?.city === city && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                        services !== "שירותים" && city === "ישוב" && gender !== "מין" ? e?.arrServices?.includes(services) && e.gender === gender && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                            services !== "שירותים" && gender === "מין" ? e?.arrServices?.includes(services) && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                                city !== "ישוב" ? e?.address?.city === city && e?.arrServices?.includes(services) && e.gender === gender && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                                    services !== "שירותים" ? e?.arrServices?.includes(services) && e.gender === gender && e?.address?.city === city && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                                        gender !== "מין" ? e.gender === gender && getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin :
                                            getAge(e.DateOfBirth.split("/").reverse().join("/")) <= ageMax && getAge(e.DateOfBirth.split("/").reverse().join("/")) >= ageMin)
        setFilterStudentd(res)
    }, [gender, ageMin, ageMax, services, city])

    const filterSearch = (value) => {
        setFilterStudentd(students?.filter(e => e.firstName.includes(value) || e.lastName.includes(value))
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
    const cityOp = ["ישוב", "אדם", "אחיה", "אלון", "אש קודש", "בית אל", "בית אריה – עופרים", "בית חורון", "גבעון החדשה", "גבעת הראל", "גבעת הרואה", "דולב", "חרשה", "חשמונאים", "טלמון", "כוכב השחר", "כוכב יעקב", "כפר אדומים", "כפר האורנים", "כרם רעים", "מבוא חורון", "מגרון", "מעלה לבונה", "מעלה מכמש", "מצפה דני", "מצפה יריחו", "מצפה כרמים", "מתיתיהו", "נוה צוף-חלמיש", "נופי פרת", "נחליאל", "נילי", "נעלה", "נריה", "עדי עד", "עטרת", "עלי", "עלמון – ענתות", "עמיחי", "עפרה", "פסגות", "קידה", "רימונים", "שבות רחל", "שילה", "תל ציון", "אחר"]


    function sendEmail(to_name, message, to_email,) {

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

    // for (let i = 0; i < filterStudents.length; i++) {
    //     let generalArr = []
    //     filterStudents[i]?.general?.files.map(e => { generalArr.push(e.name) })

    //     let difference = gerneralFiles.filter(x => !generalArr.includes(x));

    //     console.log(generalArr);
    //     console.log(difference);
    //     if (difference.length > 0) {
    //         console.log("hiii:" + difference.map(e => e));
    //     }
    // }
    
    return <div className={styles.container}>
        <div className={styles.filters}>
            <div className={styles.subfilter}>
                <button onClick={() => navigate('/new')}>➕</button>
                <Select className={styles.select} placeholder={"מין"} options={["מין", "זכר", "נקבה"]} name={"gender"} onChange={(e) => setGender(e.target.value)} />
                <Select className={styles.select} placeholder={"מגיל"} options={options} onChange={(e) => setAgeMin(e.target.value)} />
                <Select className={styles.select} placeholder={"עד גיל"} options={options} onChange={(e) => setAgeMax(e.target.value)} />
                <Select className={styles.select} placeholder={"שירותים"} options={servicesOp} onChange={(e) => setServices(e.target.value)} />
                <Select className={styles.select} placeholder={"ישוב"} options={cityOp} onChange={(e) => setCity(e.target.value)} />
                <button onClick={resate}>הצג את כולם</button>
                <button onClick={() => setFilterStudentd(studentWithExpiration)}>חניכים עם מסמכים פגי תוקף ({studentWithExpiration?.length})</button>

            </div>
            <div className={styles.search}>
                <Input placeholder={"...חיפוש"} name={"search"} onChange={(e) => filterSearch(e.target.value)} />


                <CSVLink data={csvData}><img
                    src={excel_icon} alt="Excel" className={styles.icon} /></CSVLink>
            </div>
        </div>
        <table>
            <tbody>

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
                {filterStudents?.length === 0 ? <div className={styles.noResult}>אין תוצאות מתאימות</div> :

                    filterStudents?.map((val, key) => {
                        let generalArr = []
                        let difference = []
                        val?.general?.files.map(e => { generalArr.push(e.name) })
                        difference = gerneralFiles.filter(x => !generalArr.includes(x))

                        if (val?.arrServices?.includes('תעסוקה')) {
                            let employmentArr = []
                            let difference1 = []
                            val?.employment?.files.map(e => { employmentArr.push(e.name) })
                            difference1 = employmentFiles.filter(x => !employmentArr.includes(x))
                            if (difference1.length > 0) {
                                difference.push(difference1)
                            }
                        }

                        if (val?.arrServices?.includes('מעון')) {
                            let daycareArr = []
                            let difference2 = []
                            val?.daycare?.files?.map(e => { daycareArr.push(e.name) })
                            difference2 = daycareFiles.filter(x => !daycareArr.includes(x))
                            if (difference2.length > 0) {
                                difference.push(difference2)
                            }
                        }

                        return < tr
                            key={key}
                            onClick={() => setStudent(val)}
                        >
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{val.id}</td>
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{val.firstName}</td>
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{val.lastName}</td>
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{getAge(val.DateOfBirth?.split("/").reverse().join("/"))}</td>
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{val.gender}</td>
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{val.contact[0].contactFirstName} {val.contact[0].contactLastName}-{val.contact[0].relative}</td>
                            <td onClick={() => navigate('/view', { state: { difference, key } })}>{val.contact[0].contactPhone}</td>
                            {difference.length == 0 ?
                                <td onClick={() => navigate('/view', { state: { difference, key } })}>{"✅"}</td> :
                                <td className={styles.red} onClick={() => navigate('/view', { state: { difference, key } })}>{difference.map(e => e + ", ")}</td>}
                            <td><button onClick={() => navigate('/edit', { state: key })}>📝</button></td>

                            <td className={difference.length === 0 ? styles.disabled : ""}> <button className={difference.length === 0 ? styles.disabled : ""} disabled={difference.length === 0} onClick={() => sendEmail(val.firstName, difference.map(e => "   *   " + e), val.email)}>✉️</button> </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default Table;