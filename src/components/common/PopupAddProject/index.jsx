import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { projects } from '../../../fakeData';
import Input from '../Input';
import Select from '../Select';


import './style.css'

function PopupProject({ edit, setProjectsList }) {

    let proj = []
    if (edit) {

        proj = projects[0]
    }


    const [show, setShow] = useState(false);
    const [project, setProject] = useState({ name: proj?.name, type: proj?.type, days: proj?.days, fromDate: proj?.fromDate, untilDate: proj?.untilDate, status: proj?.status });
    const [status, setStatus] = useState(proj.status || "פתוח");


    const handleClose = () => {
        setShow(false)
    }
    const handleSave = () => {
        // project.status = status
        setShow(false)
        console.log(project);

        fetch('http://localhost:4000/event/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then(data => setProjectsList(data))
            .catch(error => console.error('Error:', error));

        setProject({ name: proj?.name, type: proj?.type, days: proj?.days, fromDate: proj?.fromDate, untilDate: proj?.untilDate, status: proj?.status || status })
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProject(values => ({ ...values, [name]: value }));
    }
    useEffect(() => {
        const name = "status"
        const value = status;
        setProject(values => ({ ...values, [name]: value }));
    }, [status])




    const handleShow = () => setShow(true);


    return (
        <>
            {edit ? <button onClick={handleShow}>עריכת אירוע  📝</button> :
                <button onClick={handleShow}>צור אירוע  ➕ </button>}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='popupHeader' closeButton>
                    <Modal.Title>יצירת פרויקט</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='innerPopupProject'>
                        <label>שם הפרויקט:</label>
                        <Input defaultValue={proj?.name} placeholder={"שם הפרויקט..."} name={"name"} onChange={handleChange} />
                        <div className='date'>
                            <div>
                                <label>סוג הפרויקט:</label>
                                <Select defaultValue={proj?.type} placeholder={"סוג..."} options={["קייטנה", "שבת", "נופשון"]} name={"type"} onChange={handleChange} />
                            </div>
                            <div>
                                <label>כמות ימי נופשון:</label>

                                <Select defaultValue={proj?.days} placeholder={"כמות ימי נופשון"} options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} name={"days"} onChange={handleChange} />

                            </div></div>
                        <label>תאריכים:</label>
                        <div className='date'>
                            <Input defaultValue={proj?.fromDate} className='inputDate' placeholder={"מתאריך..."} required={true} name={"fromDate"} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                            <Input defaultValue={proj?.untilDate} className='inputDate' placeholder={"עד תאריך..."} required={true} name={"untilDate"} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                        </div>
                        <label>סטטוס:</label>
                        <div className='date'>
                            <Select defaultValue={status} options={["פתוח", "סגור"]} required={true} name={"status"} onChange={(e) => setStatus(e.target.value)} />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        סגור
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        שמור                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupProject