import Accordion from 'react-bootstrap/Accordion';
import Employment from '../Services/employment';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BasicFiles from '../Services/basic';
import PopupRemove from '../Popup remove';
import General from '../Services/general';
import Housing from '../Services/housing';
import { Modal } from 'react-bootstrap';
import Club from '../Services/club';
import Popup from '../Popup';
import './style.css'

function Accordions({ setData, data, student, setStudent }) {
    const navigate = useNavigate()
    const [arrServices, setArr] = useState(["כללי"])
    const [service, setService] = useState("general")
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show === true) {
            const timer = setTimeout(() => {
                setShow(false)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [show])

    useEffect(() => {
        if (student) {
            setArr(student.arrServices)
        }
    }, [])

    useEffect(() => {
        const name = "arrServices";
        const value = arrServices
        setData(values => ({ ...values, [name]: value }));
    }, [arrServices])

    function saveFile(e, service, name, dir, fileDate) {
        e.preventDefault()

        // console.log(fileDate);
        // console.log(name);
        //  console.log(service);
        // console.log(e.target[0].files[0]);
        // console.log(e.target[0].files[0].name);

        const fd = new FormData
        fd.append("files", e.target[0].files[0])
        fd.append("inputName", name)
        fd.append("fileDate", fileDate)
        fd.append("fileName", e.target[0].files[0].name)

        fetch('http://localhost:4000/student/generalFiles', {
            headers: { studentId: student?._id, place: service, dir },
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server); setShow(true) })
            .catch((error) => { console.error('Error:', error); });
    }

    return <div className="accordionContainer">
        {student && <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey={0}>
                <Accordion.Header>טפסים ואישורים</Accordion.Header>
                <Accordion.Body>
                    <Accordion defaultActiveKey={0} onSelect={(e) => setService(e)}>
                        {arrServices?.map((e, index) => {
                            let eventKey = "";
                            if (e === "כללי") {
                                eventKey = "general";
                            } else if (e === "דיור") {
                                eventKey = "housing";
                            } else if (e === "תעסוקה") {
                                eventKey = "employment";
                            } else if (e === "מועדונית") {
                                eventKey = "club";
                            }
                            return <Accordion.Item eventKey={eventKey}>
                                <Accordion.Header>{<div className='remove'>{e}  {index > 0 && <PopupRemove student={student} service={e} data={data} index={index} setArr={setArr} arrServices={arrServices} />}</div>}</Accordion.Header>
                                <Accordion.Body>
                                    {/* {e === "כללי" && <General eventKey="general" service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "דיור" && <Housing eventKey="housing" service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "תעסוקה" && <Employment eventKey="employment" service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "מעון" && <button onClick={() => navigate(`/dayCare`)}>ניהול מעון</button>}
                                    {e === "מועדונית" && <Club eventKey="club" service={service} saveFile={saveFile} student={student} setData={setData} data={data} />} */}
                                    {e === "כללי" && <BasicFiles arrFile={[{ name: "צילום ת.ז ילד/הורה", date: false }, { name: "ויתור סודיות", date: false }]}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "דיור" && <Housing arrFile={[{ name: "תעודת נכה", date: false }, { name: "אישור רווחה", date: true }]}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "תעסוקה" && <Employment arrFile={[{ name: "תעודת נכה", date: false }, { name: "אישור רווחה", date: true }]}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "מעון" && <button onClick={() => navigate(`/dayCare`)}>ניהול מעון</button>}
                                    {e === "מועדונית" && <Club arrFile={[{ name: "אבחון", date: true }, { name: "רישום שנתי", date: false }]}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                </Accordion.Body>
                            </Accordion.Item>
                        })}
                    </Accordion>
                    <Popup student={student} setArr={setArr} arrServices={arrServices} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        }
        <Modal
            size='sm'
            show={show}
            onHide={() => setShow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Body style={{ color: "green" }}>
                    נשמר בהצלחה!
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </div >
}

export default Accordions;