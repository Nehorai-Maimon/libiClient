import React, { useContext, useState } from 'react'
import styles from "./style.module.css"
// import { projects } from '../../fakeData'
// import Select from '../../components/common/Select'
// import Table from '../TableStudent'
// import TableStudentProj from '../../components/common/TableStudentProj'
import PopupAddStudent from '../../components/common/PopupAddStudent'
import TableStudentIn from '../../components/common/TableStudentIn'
// import { useLocation } from 'react-router-dom'
import ProjectContext from '../../context/ProjectContext'



function ProjectView() {
    const { project } = useContext(ProjectContext)
    const [studentsToProject, setStudentsToProject] = useState();

    return <div className={styles.con}>
        <div className={styles.titleStudent}> {project.name}</div>
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>שם האירוע: </span>{project.name}</div>
                        <div className={styles.line}>  <span className={styles.question}>סוג: </span>{project.type}</div>

                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>תאריכים: </span>{project.fromDate + " עד " + project.untilDate}</div>
                        <div className={styles.line}>  <span className={styles.question}>ימי נופשון: </span>{project.days}</div>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>סטטוס: </span>{project.status}</div>
                    </div>

                </div>
                <div>
                    <div className={styles.subContainer}>
                        <PopupAddStudent studentsToProject={studentsToProject} setStudentsToProject={setStudentsToProject} />
                    </div>
                    <div className={styles.subContainer}>
                        {/* <div className={styles.line}>  <span className={styles.question}>חניכים משויכים לאירוע: </span>{studentsToProject?.map(e => e + " , ") || project?.studentsInvited?.map(e => e + " , ")} */}
                        {/* </div> */}
                    </div>
                    <div className={styles.tableStudentsIn}>
                        <TableStudentIn studentsIn={studentsToProject || project.studentsInvited} />
                    </div>
                    {/* <TableStudentProj /> */}
                    {/* {students?.map(e => e)} */}
                </div>
                {/* <div className={styles.box}>
                        <div className={styles.title}>אנשי קשר</div>
                        {project.contact.map((e, index) => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <span className={styles.question}>{index + 1 + " |"}</span>
                                    <div className={styles.line}>  <span className={styles.question}>שם: </span>{e.contactFirstName + " " + e.contactLastName}</div>
                                    <div className={styles.line}>  <span className={styles.question}>טלפון: </span>{e.contactPhone}</div>
                                    <div className={styles.line}>  <span className={styles.question}>אימייל: </span>{e.contactEmail}</div>
                                    <div className={styles.line}>  <span className={styles.question}>קרבה: </span>{e.relative}</div>
                                    <div className={styles.line}>  <span className={styles.question}>הערות: </span>{e?.comment}</div>
                                    {e.apotropus &&
                                        <div className={styles.line}>  <span className={styles.question}>אפוטרופוס: </span>כן</div>}
                                </div>
                            </>
                            )
                        })}
                    </div> */}
            </div>
        </div>
    </div>
}

export default ProjectView