import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BasicFiles from '../Services/basic';
import PopupRemove from '../Popup remove';
import { Modal } from 'react-bootstrap';
import Popup from '../Popup';
import './style.css'

function Accordions({ setData, data, student, setStudent }) {
    const REACT_APP_IP = process.env.REACT_APP_IP
    const navigate = useNavigate()
    const [arrServices, setArr] = useState(["כללי"])
    const [service, setService] = useState("general")
    const [show, setShow] = useState(false)
    const [arrFile, setArrFile] = useState()

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

        fetch('http://' + REACT_APP_IP+ '/student/generalFiles', {
            headers: { studentId: student?._id, place: service, dir },
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { setStudent(result.server); setShow(true) })
            .catch((error) => { console.error('Error:', error); });
        e.target[0].value = ""
    }

    function selectService(e) {
        if (e !== undefined) {
            setService(e)
        }
    }

    // useEffect(() => { console.log("service", service) }, [service])
    // useEffect(() => { console.log(arrFile) }, [arrFile])

    useEffect(() => {
        let files;

        if (service === "general") {
            files = [
                { name: "צילום ת.ז ילד/הורה", date: false },
                { name: "ויתור סודיות", date: false }
            ]
            for (let i in student.general.files) {
                for (let r in files) {
                    if (student.general.files[i].inputName === files[r].name) {
                        files.splice(r, 1)
                    }
                }
            }
            data?.sensitivity === "כן" || student?.sensitivity === "כן" ?
                setArrFile([...files, { name: "רגישות רפואית", date: true }])
                :
                setArrFile(files)
        }
        if (service === "housing") {
            files = [
                { name: "תעודת נכה", date: false },
                { name: "אישור רווחה", date: true }
            ]
            for (let i in student.housing.files) {
                for (let r in files) {
                    if (student.housing.files[i].inputName === files[r].name) {
                        files.splice(r, 1)
                    }
                }
            }
            setArrFile(files)
        }
        if (service === "employment") {
            files = [
                { name: "תעודת נכה", date: false },
                { name: "אישור רווחה", date: true }
            ]
            for (let i in student.employment.files) {
                for (let r in files) {
                    if (student.employment.files[i].inputName === files[r].name) {
                        files.splice(r, 1)
                    }
                }
            }
            setArrFile(files)
        }
        if (service === "club") {
            files = [
                { name: "אבחון", date: true },
                { name: "רישום שנתי", date: false }
            ]
            for (let i in student.club.files) {
                for (let r in files) {
                    if (student.club.files[i].inputName === files[r].name) {
                        files.splice(r, 1)
                    }
                }
            }
            setArrFile(files)
        }
    }, [service])

    return <div className="accordionContainer">
        {student && <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey={0}>
                <Accordion.Header>טפסים ואישורים</Accordion.Header>
                <Accordion.Body>
                    <Accordion defaultActiveKey={0} onSelect={selectService}>
                        {arrServices?.map((e, index) => {
                            let eventKey;
                            if (e === "כללי") {
                                eventKey = "general";
                            }
                            if (e === "דיור") {
                                eventKey = "housing";
                            }
                            if (e === "תעסוקה") {
                                eventKey = "employment";
                            }
                            if (e === "מועדונית") {
                                eventKey = "club";
                            }
                            return <Accordion.Item eventKey={eventKey}>
                                <Accordion.Header>{<div className='remove'>{e}  {index > 0 && <PopupRemove student={student} service={e} data={data} index={index} setArr={setArr} arrServices={arrServices} />}</div>}</Accordion.Header>
                                <Accordion.Body>
                                    {e === "כללי" && <BasicFiles arrFile={arrFile} setArrFile={setArrFile}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "דיור" && <BasicFiles arrFile={arrFile} setArrFile={setArrFile}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "תעסוקה" && <BasicFiles arrFile={arrFile} setArrFile={setArrFile}
                                        service={service} saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "מעון" && <button onClick={() => navigate(`/dayCare`)}>ניהול מעון</button>}
                                    {e === "מועדונית" && <BasicFiles arrFile={arrFile} setArrFile={setArrFile}
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
                    שמירה בוצעה
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </div >
}

export default Accordions;