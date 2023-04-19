import React, { useContext, useEffect, useState } from 'react'
import StudentContext from '../../context/StudentContext';
import Select from '../../components/common/Select';
import UserContext from '../../context/UserContext';
import DayCare_Services from './services/Services';
import DayCare_General from './services/general';
import DayCare_Social from './services/social';
import DayCare_Para from './services/Para';
import AccordionYears from './Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './style.css'

function Daycare() {
    const { student, setStudent } = useContext(StudentContext)
    const { user, setUser } = useContext(UserContext);
    const [year, setYear] = useState()
    const currentYear = new Date().getFullYear();
    const [service, setService] = useState("general")
    const [studentFiles, setStudentFiles] = useState(false)

    function saveForm(form, place) {

        // console.log(form);
        // console.log(place);

        fetch('http://localhost:4000/student/updateDaycare', {
            headers: {
                studentId: student?._id, place,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server) })
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

        fetch('http://localhost:4000/student/generalFiles', {
            headers: { studentId: student?._id, place, dir, currentYear, daycare: true },
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server) })
            .catch((error) => { console.error('Error:', error); });
        e.target[0].value = ""
    }

    function deleteFile(fileKey, year = "") {
        fetch('http://localhost:4000/student/dayCare/deleteFile', {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ key: fileKey, studentId: student?._id, year })
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server) })
            .catch((error) => { console.error('Error:', error); });
    }

    const addYears = () => {
        fetch('http://localhost:4000/student/addYearDaycare', {
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
            <Tab eventKey="social" title="עובדת סוציאלית" disabled={user.userName !== "שלומית"} >
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
    </div>
}

export default Daycare