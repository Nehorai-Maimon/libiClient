import styles from "./style.module.css"
import { students, projects } from '../../../fakeData'
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Select from "../Select";
import Input from "../Input";
import emailjs from 'emailjs-com'
import { CSVLink } from "react-csv";
import excel_icon from '../../../images/Excel.png'





function TableStudentIn({ studentsIn }) {
    const project = projects[0]

    const filterStudents = students.filter(e => studentsIn?.includes(e.id))

    const [studentsPart, setStudentsPart] = useState(project?.studentsPart || [])
    const [studentsPaid, setStudentsPaid] = useState(project?.studentsPaid || [])

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

    // const [checkAll, setCheckAll] = useState(false)
    // const csvData =
    //     filterStudents;

    // let studentsToDownload = []
    // filterStudents.map(e => {
    //     return (
    //         studentsToDownload.push({ תז: e.id, שם: e.firstName, שם_משפחה: e.lastName, מין: e.gender, איש_קשר: e.contact[0].contactFirstName + " " + e.contact[0].contactLastName + "-" + e.contact[0].relative, איש_קשר_טלפון: e.contact[0].contactPhone, שירותים: e.arrServices })
    //     )
    // })
    // console.log(studentsToDownload);
    // const csvData =
    //     studentsToDownload;



    const addToArrPart = (id) => {
        if (studentsPart?.filter(e => e === id).length == 0) {
            setStudentsPart([...studentsPart, id])
        } else {

            const newList = [...studentsPart]
            newList.splice(studentsPart.indexOf(id), 1);
            setStudentsPart(newList);

        }
    }
    const addToArrPaid = (id) => {
        if (studentsPaid?.filter(e => e === id).length == 0) {
            setStudentsPaid([...studentsPaid, id])
        } else {

            const newList = [...studentsPaid]
            newList.splice(studentsPaid.indexOf(id), 1);
            setStudentsPaid(newList);

        }
    }
    // const TocheckAll = () => {
    //     setCheckAll(!checkAll)
    //     if (!checkAll) {
    //         const newList = []
    //         filterStudents.forEach(e => newList.push(e.id))
    //         setStudentArr(newList)
    //     } else {
    //         setStudentArr([])
    //     }
    // }

    useEffect(() => {
        console.log(studentsPart)
    }, [studentsPart])
    useEffect(() => {
        console.log(studentsPaid)
    }, [studentsPaid])




    return (
        <div>
            <div className={styles.container}>
                {/* <div className={styles.filters}> */}
                {/* <div className={styles.subfilter}>
                        <Select className={styles.select} placeholder={"מין"} options={["מין", "זכר", "נקבה"]} name={"gender"} onChange={(e) => setGender(e.target.value)} />
                        <Select className={styles.select} placeholder={"מגיל"} options={options} onChange={(e) => setAgeMin(e.target.value)} />
                        <Select className={styles.select} placeholder={"עד גיל"} options={options} onChange={(e) => setAgeMax(e.target.value)} />
                        <Select className={styles.select} placeholder={"שירותים"} options={servicesOp} onChange={(e) => setServices(e.target.value)} />
                        <Select className={styles.select} placeholder={"ישוב"} options={cityOp} onChange={(e) => setCity(e.target.value)} />
                        <button onClick={resate}>הצג את כולם</button>
                    </div> */}
                {/* <div className={styles.search}> */}
                {/* <Input placeholder={"...חיפוש"} name={"search"} onChange={(e) => filterSearch(e.target.value)} /> */}


                {/* <CSVLink data={csvData}><img
                            src={excel_icon} alt="Excel" className={styles.icon} /></CSVLink> */}
                {/* </div> */}
                {/* </div> */}
                <table>
                    <tr>
                        {/* <th><input type="checkbox" name='checkAll' onChange={() => TocheckAll()} /></th> */}
                        <th>תעודת זהות</th>
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                        <th>גיל</th>
                        <th>מין</th>
                        <th>איש קשר</th>
                        <th>טלפון</th>
                        <th>השתתף</th>
                        <th>שולם</th>
                        {/* <th>שירותים</th> */}
                        {/* <th>מסמכים ואישורים</th> */}
                        {/* <th>עריכה</th> */}
                        {/* <th>שליחת תזכורת</th> */}
                    </tr>
                    {filterStudents.length === 0 ? <div className={styles.noResult}>אין תוצאות מתאימות</div> :

                        filterStudents.map((val, key) => {
                            // let generalArr = []
                            // let difference = []
                            // val?.general?.files.map(e => { generalArr.push(e.name) })
                            // difference = gerneralFiles.filter(x => !generalArr.includes(x))

                            // if (val?.arrServices?.includes('תעסוקה')) {
                            //     let employmentArr = []
                            //     let difference1 = []
                            //     val?.employment?.files.map(e => { employmentArr.push(e.name) })
                            //     difference1 = employmentFiles.filter(x => !employmentArr.includes(x))
                            //     if (difference1.length > 0) {
                            //         difference.push(difference1)
                            //     }
                            // }
                            // if (val?.arrServices?.includes('מעון')) {
                            //     let daycareArr = []
                            //     let difference2 = []
                            //     val?.daycare?.files.map(e => { daycareArr.push(e.name) })
                            //     difference2 = daycareFiles.filter(x => !daycareArr.includes(x))
                            //     if (difference2.length > 0) {
                            //         difference.push(difference2)
                            //     }
                            // }


                            return (
                                < tr key={key} >
                                    {/* <td><input type="checkbox" name='check' checked={studentArr.includes(val.id)} onChange={() => addToArr(val.id)} /></td> */}
                                    <td >{val.id}</td>
                                    <td >{val.firstName}</td>
                                    <td >{val.lastName}</td>
                                    <td >{getAge(val.date.split("/").reverse().join("/"))}</td>
                                    <td >{val.gender}</td>
                                    <td >{val.contact[0].contactFirstName} {val.contact[0].contactLastName}-{val.contact[0].relative}</td>
                                    <td >{val.contact[0].contactPhone}</td>
                                    <td ><input type="checkbox" name='participated' checked={studentsPart.includes(val.id)} onChange={() => addToArrPart(val.id)} /></td>
                                    <td ><input type="checkbox" name='paid' checked={studentsPaid.includes(val.id)} onChange={() => addToArrPaid(val.id)} /></td>

                                </tr>

                            )
                        })
                    }
                </table>
            </div>
        </div >
    );
}

export default TableStudentIn;
