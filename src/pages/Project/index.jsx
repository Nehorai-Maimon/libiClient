import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { projects } from '../../fakeData'
import PopupProject from '../../components/common/PopupAddProject';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from '../../components/common/Select';
import Input from '../../components/common/Input';



function Projects() {
    const navigate = useNavigate();

    const [edit, setEdit] = useState(true)

    const [filterProject, setFilterProject] = useState(projects)

    const [type, setType] = useState("אירוע")
    const [status, setStatus] = useState("סטטוס")

    const filterSearch = (value) => {
        setFilterProject(projects.filter(e => e.name.includes(value))
        )
    }

    const resate = () => {
        setFilterProject(projects)

    }
    useEffect(() => {
        let res = projects.filter(e =>
            type !== "אירוע" && status === "סטטוס" ? e.type === type :
                type === "אירוע" && status !== "סטטוס" ? e.status === status :
                    type !== "אירוע" ? e.type === type && e.status === status :
                        status !== "סטטוס" ? e.status === status && e.type === type :
                            projects)
        setFilterProject(res)
    }, [type, status])



    return (

        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.subfilter}>
                    <div ><PopupProject /></div>
                    <Select className={styles.select} placeholder={"סוג אירוע"} options={['אירוע', "שבת", "קייטנה", "נופשון"]} name={"type"} onChange={(e) => setType(e.target.value)} />
                    <Select className={styles.select} placeholder={"סטטוס"} options={['סטטוס', "פתוח", "סגור"]} name={"status"} onChange={(e) => setStatus(e.target.value)} />

                    <button onClick={resate}>הצג הכל</button>
                </div>
                <div className={styles.search}>
                    <Input placeholder={"...חיפוש"} name={"search"} onChange={(e) => filterSearch(e.target.value)} />


                    {/* <CSVLink data={csvData}><img
                        src={excel_icon} alt="Excel" className={styles.icon} /></CSVLink> */}
                </div>
            </div>
            <table>
                <tr>
                    <th>שם האירוע</th>
                    <th>סוג</th>
                    <th>מתאריך</th>
                    <th>עד תאריך</th>
                    <th>כמות ימי נופשון</th>
                    <th>סטטוס</th>
                    <th>עריכת אירוע</th>
                </tr>
                {filterProject.length === 0 ? <div className={styles.noResult}>אין תוצאות מתאימות</div> :

                    filterProject.map((val, key) => {

                        return (
                            < tr key={key} >
                                <td onClick={() =>
                                    navigate('/projectView')}>{val.name}</td>
                                <td onClick={() => navigate('/projectView')}>{val.type}</td>
                                <td onClick={() => navigate('/projectView')}>{val.fromDate}</td>
                                <td onClick={() => navigate('/projectView')}>{val.untilDate}</td>
                                <td onClick={() => navigate('/projectView')}>{val.days}</td>
                                <td onClick={() => navigate('/projectView')}>{val.status}</td>

                                <td><PopupProject edit={edit} /></td>

                            </tr>

                        )
                    })
                }
            </table>
        </div>
        // </div >

    )
}

export default Projects