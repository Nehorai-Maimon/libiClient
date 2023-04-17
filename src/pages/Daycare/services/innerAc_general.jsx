import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Select from '../../../components/common/Select';
import Input from '../../../components/common/Input';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState, useRef } from 'react'
import Tab from 'react-bootstrap/Tab';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function InnerAcc_general({ v, student, setStudent, saveForm, service }) {

    const [tsa, setTsa] = useState({});
    const [class_, setClass_] = useState("");
    const [show, setShow] = useState(false);
    const elementRef = useRef(null)

    function handleSubmit() {
        const year = v.year
        const form = { year, tsa }
        saveForm(form, service)
    }

    function createPdf() {
        // find the element
        const element = elementRef.current
        // make a canvas image 
        html2canvas(element).then(canvas => {
            // convert to base64
            const imgData = canvas.toDataURL()
            // create a new pdf file and set the width and height
            const doc = new jsPDF('p', 'mm', [210, canvas.height - 1250])
            // set porportion to the image
            let imgWidth = doc.internal.pageSize.width - 10;
            let pageWidth = doc.internal.pageSize.width;
            let xPos = (pageWidth - imgWidth) / 2;
            // add image
            doc.addImage(imgData, "JPEG", xPos, 0, imgWidth, 0);
            // download pdf
            doc.save("tsa.pdf");
        })
        setShow(false)
    }

    function addTeam(team) {
        fetch('http://localhost:4000/student/addTeamDaycare', {
            headers: {
                studentId: student?._id,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                year: v.year,
                team
            })
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server) })
            .catch((error) => { console.error('Error:', error); });
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return <div className="container">
        <Tabs
            defaultActiveKey="0"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="0" title="מידע כללי">
                <div className='years'>
                    <div className='title'>
                        <div className='subTitle'>:שיוך לקבוצה</div>
                        <Select defaultValue={v ? v.team : ""} placeholder={"בחר קבוצה"} options={["פעוטות", "תינוקות", "בוגרים"]} onChange={(e) => setClass_(e.target.value)} />
                        <button onClick={() => addTeam(class_)}>הוספה</button>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="1" title="תש''א">
                <div className="subTitle">תש"א כללי</div>
                <div className="inputs">
                    <Input defaultValue={v ? v.tsa?.date : ""} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <textarea defaultValue={v ? v.tsa?.summary : ""} className='textarea_daycare_1' name="summary" placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <Input defaultValue={v ? v.tsa?.author : ""} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <button onClick={handleSubmit} type="button" className="btnadd">שמירה</button>
                    <button onClick={handleShow} className="btnadd">הפק דו"ח תש"א שנתי</button>
                </div>
            </Tab>
        </Tabs>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
        >
            <ModalHeader closeButton>
                <ModalTitle style={{ width: "600px" }}>יצירת קובץ PDF</ModalTitle>
            </ModalHeader>
            <ModalBody ref={elementRef} >
                <div style={{ display: "flex" }}>
                    <div className='tsaTitle'>
                        דוח תש"א לשנת {v.year}:
                    </div>
                </div>תאריך<br />
                <div className='tsaTitle'>
                    כללי:
                </div>
                {v.tsa?.summary ? v.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    קלינאות תקשורת:
                </div>
                {v.speech.tsa?.summary ? v.speech.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    ריפוי בעיסוק:
                </div>
                {v.occupation.tsa?.summary ? v.occupation.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    פיזיותרפיה:
                </div>
                {v.physiotherapy.tsa?.summary ? v.physiotherapy.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    עובדת סוציאלית:
                </div>
                {v.social.tsa?.summary ? v.social.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    תזונה:
                </div>
                {v.dietician.tsa?.summary ? v.dietician.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    גננת:
                </div>
                {v.teacher.tsa?.summary ? v.teacher.tsa?.summary : "אין נתונים"}<br />
                <div className='tsaTitle'>
                    רפואי:
                </div>
                {v.medical.tsa?.summary ? v.medical.tsa?.summary : "אין נתונים"}
            </ModalBody>
            <ModalFooter>
                <Button variant='secondary' onClick={handleClose}>
                    סגור
                </Button>
                <Button variant='primary' onClick={createPdf}>
                    הורד
                </Button>
            </ModalFooter>
        </Modal>
    </div>
}

export default InnerAcc_general