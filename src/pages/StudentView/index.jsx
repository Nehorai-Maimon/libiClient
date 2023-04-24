import React, { useContext, useState, useEffect } from 'react'
import StudentContext from '../../context/StudentContext';
import { Download, Trash } from 'react-bootstrap-icons';
import { Button, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { projects } from '../../fakeData'
import styles from "./style.module.css"

function StudentView() {
    const location = useLocation()
    const { student, setStudent } = useContext(StudentContext)
    const [deleteShow, setDeleteShow] = useState(false)
    const [wantToDelete, setWantToDelete] = useState(false)
    const [deleteOp, setDeleteOp] = useState()

    useEffect(() => {
        if (wantToDelete) {
            fetch('http://localhost:4000/student/dayCare/deleteFile', {
                headers: { "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ key: deleteOp, studentId: student?._id })
            })
                .then((response) => response.json())
                .then((result) => { setStudent(result.server) })
                .catch((error) => { console.error('Error:', error); });
        }
    }, [wantToDelete])

    let missingFiles = location.state.difference

    //פרויקטים בהם השתתף החניך
    const projectsByStudent = projects.filter(e => e.studentsPart.includes(student?.id))
    // console.log(projectsByStudent)

    //פרויקטים ששולמו
    const projectsPaidByStudent = projects.filter(e => e.studentsPaid.includes(student?.id))
    // console.log(projectsPaidByStudent)

    const countDaysFunction = (year) => {
        let countDays = 0
        for (let i of projectsPaidByStudent) {
            if (i.fromDate.slice(0, 4) === year) {
                countDays += Number(i.days)
            }
            // console.log(i.fromDate.slice(0, 4), i.fromDate.slice(0, 4) === year);
        }
        return countDays
    }

    function deleteFile(fileKey) {
        setWantToDelete()
        setDeleteShow(true)
        setDeleteOp(fileKey)
    }

    const currDate = new Date()
    currDate.setDate(currDate.getDate() + 30);

    //כדי להציג את ימי הנופשון של השנה הנוכחית
    const currentYear = new Date().getFullYear();
    // console.log(currentYear);

    function downloadFile(filePath) {
        fetch(`http://localhost:4000/student/files`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filePath })
        })
            .then((response) => response.json())
            .then(data => window.open(data.server, "_blank"))
            .catch(error => console.error('Error:', error));
    }

    function calcExpiration(fileDate, date) {
        let FDate = new Date(fileDate)
        FDate.setHours(FDate.getHours() + 3).toString()
        return FDate - date
    }

    return <div className={styles.con}>
        <div className={styles.titleStudent}> {student?.firstName + " " + student?.lastName}</div>
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>ת.ז: </span>{student?.id}</div>
                        <div className={styles.line}>  <span className={styles.question}>מין: </span>{student?.gender}</div>
                        <div className={styles.line}>  <span className={styles.question}>תאריך לידה: </span>{student?.DateOfBirth}</div>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>ישוב: </span>{student?.address?.city === "אחר" ? student?.address?.other : student?.address?.city}</div>
                        <div className={styles.line}>  <span className={styles.question}>כתובת: </span>{student?.address?.address}</div>
                        <div className={styles.line}>  <span className={styles.question}>קופת חולים: </span>{student?.hmo}</div>
                        <div className={styles.line}>  <span className={styles.question}>רגישות רפואית: </span>{student?.sensitivity === "כן" ? student?.sensitivity + ". " + student?.more : student?.sensitivity}</div>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>טלפון: </span>{student?.phone}</div>
                        <div className={styles.line}>  <span className={styles.question}>אימייל: </span>{student?.email}</div>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>שירותים: </span>{student?.arrServices.map(e => e != "כללי" ? "▪️" + e + " " : "")}</div>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>מוכר בשירות: </span>{student?.service.map(e => "▪️" + e + " ")}</div>
                        <div className={styles.line}>  <span className={styles.question}>אבחנה : </span>{student?.diagnosis}</div>
                    </div>
                    {student?.days?.map(e => e.year === currentYear ? (
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>זכאי לימי נופשון לשנת {e.year}: </span>{e.days} </div>
                            <div className={styles.line}>  <span className={styles.question}>מתוכם מומשו : </span>{countDaysFunction(e.year)}</div>
                            <div className={styles.line}>  <span className={styles.question}>מתוכם נותרו : </span>{e.days - countDaysFunction(e.year)}</div>
                        </div>) : ""
                    )}
                </div>
                <div className={styles.box}>
                    <div className={styles.title}>אנשי קשר</div>
                    {student?.contact.map((e, index) => {
                        return <div className={styles.subContainer}>
                            <span className={styles.question}>{index + 1 + " |"}</span>
                            <div className={styles.line}>  <span className={styles.question}>שם: </span>{e.contactFirstName + " " + e.contactLastName}</div>
                            <div className={styles.line}>  <span className={styles.question}>טלפון: </span>{e.contactPhone}</div>
                            <div className={styles.line}>  <span className={styles.question}>אימייל: </span>{e.contactEmail}</div>
                            <div className={styles.line}>  <span className={styles.question}>קרבה: </span>{e.relative}</div>
                            <div className={styles.line}>  <span className={styles.question}>הערות: </span>{e?.comment}</div>
                            {e.apotropus &&
                                <div className={styles.line}>  <span className={styles.question}>אפוטרופוס: </span>כן</div>}
                        </div>
                    })}
                </div>
                <div className={styles.box}>
                    <div className={styles.title}>טיפול תרופתי</div>
                    {student?.medication.map((e, index) => {
                        return <div className={styles.subContainer}>
                            <span className={styles.question}>{index + 1 + " |"}</span>
                            <div className={styles.line}>  <span className={styles.question}>התרופה: </span>{e.name}</div>
                            <div className={styles.line}>  <span className={styles.question}>שעת נטילה: </span>{e.time}</div>
                        </div>
                    })}
                </div>


            </div>

            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.title}>השתתפות בפרויקטים </div>

                    {projectsByStudent?.map(e =>
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>▪️ </span>{e.name + "  |  " + e.fromDate + "  -  " + e.untilDate + "  |  " + e.days + "  ימי נופשון  "}</div>
                        </div>)}
                </div>

                <div className={styles.box}>
                    <div className={styles.title}>מטרות ויעדים</div>

                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student?.aboutStudent}</div>
                    </div>

                    <div className={styles.subContainer}>
                        <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student?.aboutfamily}</div>
                    </div>

                    <div className={styles.subContainer}>

                        <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student?.generalGoals}</div>
                    </div>
                    <div className={styles.subContainer}>

                        <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student?.goalsToYear}</div>
                    </div>

                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.boxFile}>
                    <div className={styles.title}>אישורים וטפסים</div>

                    <div className={styles.title}>כללי- חובה</div>

                    {student?.general.files.map((e, i) => {
                        return <div className={styles.subContainer}>
                            <div className={calcExpiration(e.expirationDate, currDate) <= 0 ? 'expiration' : 'show-files-daycare'}>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>כללי- רשות</div>

                    {student?.general.filesOp.map((e, i) => {
                        return <div className={styles.subContainer}>
                            <div className='show-files-daycare'>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>תעסוקה- חובה</div>

                    {student?.employment?.files.map((e, i) => {
                        return <div className={styles.subContainer}>
                             <div className={calcExpiration(e.expirationDate, currDate) <= 0 ? 'expiration' : 'show-files-daycare'}>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>תעסוקה- רשות</div>

                    {student?.employment?.filesOp?.map((e, i) => {
                        return <div className={styles.subContainer}>
                            <div className='show-files-daycare'>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>מעדונית- חובה</div>

                    {student?.club?.files.map((e, i) => {
                        return <div className={styles.subContainer}>
                             <div className={calcExpiration(e.expirationDate, currDate) <= 0 ? 'expiration' : 'show-files-daycare'}>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>מועדונית- רשות</div>

                    {student?.club?.filesOp?.map((e, i) => {
                        return <div className={styles.subContainer}>
                            <div className='show-files-daycare'>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>דיור- חובה</div>

                    {student?.housing?.files.map((e, i) => {
                        return <div className={styles.subContainer}>
                             <div className={calcExpiration(e.expirationDate, currDate) <= 0 ? 'expiration' : 'show-files-daycare'}>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className={styles.title}>דיור- רשות</div>

                    {student?.housing?.filesOp?.map((e, i) => {
                        return <div className={styles.subContainer}>
                            <div className='show-files-daycare'>
                                <span >{e.inputName}: {e.fileName + " "} </span>
                                <br />
                                <div>הועלה ב: {e.date.split("T")[0]}</div>
                                {e.expirationDate && <div>תאריך תפוגה: {e.expirationDate.split("T")[0]}</div>}
                                <div className='file-function'>
                                    <div className='file-function-spc' onClick={() => downloadFile(e.filePath)}><Download /></div>
                                    <div className='file-function-spc' onClick={() => deleteFile(e.filePath)}><Trash /></div>
                                </div>
                            </div>
                        </div>
                    })}

                    {missingFiles.length > 0 &&
                        <div className={styles.boxFile}>
                            <div className={styles.titleMissing}>חוסרים</div>

                            {missingFiles?.map(e => {
                                return <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.questionMissing}>{e} </span></div>
                                </div>
                            })}
                        </div>}
                </div>
            </div>
        </div>
        <Modal
            show={deleteShow}
            onHide={() => setDeleteShow(false)}
            backdrop="static"
        >
            <Modal.Body>
                האם את/ה בטוח/ה שברצונך למחוק את הקובץ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => { setWantToDelete(true); setDeleteShow(false) }}>
                    מחק
                </Button>
                <Button variant='secondary' onClick={() => { setWantToDelete(false); setDeleteShow(false) }}>
                    שמור
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default StudentView