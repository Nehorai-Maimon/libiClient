import React, { useContext, useEffect, useState } from 'react'
import StudentContext from '../../context/StudentContext';
import Select from '../../components/common/Select';
import DayCare_Services from './services/Services';
import DayCare_General from './services/general';
import DayCare_Social from './services/social';
import DayCare_Para from './services/Para';
import AccordionYears from './Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './style.css'
import { Button, Modal } from 'react-bootstrap';
const REACT_APP_IP = process.env.REACT_APP_IP

function Daycare() {
    const { student, setStudent } = useContext(StudentContext)
    const [year, setYear] = useState()
    const currentYear = new Date().getFullYear();
    const [service, setService] = useState("general")
    const [studentFiles, setStudentFiles] = useState(false)
    const worker = JSON.parse(localStorage.getItem("worker"))
    const [confirmShow, setConfirmShow] = useState(false)
    const [deleteShow, setDeleteShow] = useState(false)
    const [wantToDelete, setWantToDelete] = useState(false)
    const [deleteOp, setDeleteOp] = useState()

    useEffect(() => {
        if (confirmShow === true) {
            const timer = setTimeout(() => {
                setConfirmShow(false)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [confirmShow])

    function saveForm(form, place) {

        // console.log(form);
        // console.log(place);

        fetch('http://' + REACT_APP_IP + '/student/updateDaycare', {
            headers: {
                studentId: student?._id, place,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server); setConfirmShow(true) })
            .catch((error) => { console.error('Error:', error); });
    }

    function saveFile(e, place, name, dir) {
        e.preventDefault()

        // console.log(name);
        // console.log(place);
        // console.log(dir);
        // console.log(currentYear);

        // console.log(e.target[0].files[0]);
        // console.log(e.target[0].files[0].name);

        const fd = new FormData
        fd.append("files", e.target[0].files[0])
        fd.append("inputName", name)
        fd.append("fileName", e.target[0].files[0].name)

        fetch('http://' + REACT_APP_IP + '/student/generalFiles', {
            headers: { studentId: student?._id, place, dir, currentYear, daycare: true },
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server); setConfirmShow(true) })
            .catch((error) => { console.error('Error:', error); });
        e.target[0].value = ""
    }

    useEffect(() => {
        if (wantToDelete) {
            fetch('http://' + REACT_APP_IP + '/student/dayCare/deleteFile', {
                headers: { "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ key: deleteOp.fileKey, studentId: student?._id, year: deleteOp.year })
            })
                .then((response) => response.json())
                .then((result) => { setStudent(result.server) })
                .catch((error) => { console.error('Error:', error); });
        }
    }, [wantToDelete])

    function deleteFile(fileKey, year = "") {
        setDeleteShow(true)
        setDeleteOp({ fileKey, year })
    }

    const addYears = () => {
        fetch('http://' + REACT_APP_IP + '/student/addYearDaycare', {
            headers: {
                studentId: student?._id,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ year })
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server) })
            .catch((error) => { console.error('Error:', error); });
    }

    useEffect(() => { setStudentFiles(!studentFiles) }, [student])

    if (!student) {
        return <div>loading...</div>
    }

    return <div className="daycare">
        <Tabs
            defaultActiveKey="general"
            id="fill-tab-example"
            className="mb-3"
            fill
            onSelect={(e) => setService(e)}
        >
            <Tab eventKey="general" title="כללי" >
                <DayCare_General studentFiles={studentFiles} saveFile={saveFile} deleteFile={deleteFile} service={service} student={student} />
                <div className='years'>
                    <div className='title'>
                        <div className='subTitle'>:הוספת שנה</div>
                        <Select placeholder={"...הוסף שנה"} options={[currentYear, currentYear + 1]} onChange={(e) => setYear(e.target.value)} />
                        <button onClick={addYears}>הוספה</button>
                    </div>
                </div>
                <AccordionYears saveForm={saveForm} setStudent={setStudent} student={student} service={service} />
            </Tab>
            <Tab eventKey="speech" title="קלינאות תקשורת" >
                <DayCare_Para studentFiles={studentFiles} saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
            <Tab eventKey="occupation" title="ריפוי בעיסוק" >
                <DayCare_Para saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
            <Tab eventKey="physiotherapy" title="פיזיותרפיה" >
                <DayCare_Para saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
            <Tab eventKey="social" title="עובדת סוציאלית" disabled={worker.role !== "admin"} >
                <DayCare_Social saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
            <Tab eventKey="dietician" title="תזונה" >
                <DayCare_Services saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
            <Tab eventKey="teacher" title="גננת" >
                <DayCare_Services saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
            <Tab eventKey="medical" title="רפואי" >
                <DayCare_Services saveForm={saveForm} deleteFile={deleteFile} saveFile={saveFile} student={student} service={service} />
            </Tab>
        </Tabs>
        <Modal
            size='sm'
            show={confirmShow}
            onHide={() => setConfirmShow(false)}
        >
            <Modal.Body style={{ color: "green" }}>
                שמירה בוצעה
            </Modal.Body>
        </Modal>
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
    </div >
}

export default Daycare