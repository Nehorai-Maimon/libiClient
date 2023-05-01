import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from '../Select';
import './style.css'


function Popup({ student, setArr, arrServices }) {
    const REACT_APP_IP = process.env.REACT_APP_IP
    const [show, setShow] = useState(false);
    const [newSer, setNewSer] = useState();

    const handleClose = () => {
        setShow(false)
    }

    const handleSave = () => {
        const prev = [...arrServices]
        prev.push(newSer)
        setArr([...arrServices, newSer])
        fetch('https://' + REACT_APP_IP+ '/student/updateArrService', {
            headers: {
                studentId: student?._id,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(prev)
        })
            .then((response) => response.json())
            .then((result) => { console.log(result) })
            .catch((error) => { console.error('Error:', error); });

        setShow(false)
    }
    const arrOptions = ["דיור", "תעסוקה", "מעון", "מרכז יום", "מועדונית"]
    const [options, setOptions] = useState(arrOptions)
    let intersection = arrOptions.filter(x => !arrServices.includes(x));

    useEffect(() => {
        setOptions(intersection)
    }, [arrServices])

    const handleShow = () => setShow(true);

    if (!student) {
        return <div>loading...</div>
    }

    return <>
        <Button className='btnPopup' variant="primary" onClick={handleShow}>
            הוספת שירות            </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='popupHeader' closeButton>
                <Modal.Title>הוספת שירות</Modal.Title>
            </Modal.Header>
            <Modal.Body>בחרו שירות מהרשימה

                {options.length > 0 ?
                    <Select placeholder={"בחרו שירות..."} options={options} onChange={(e) => setNewSer(e.target.value)} /> :
                    <div>כל השירותים נבחרו כבר</div>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    סגור
                </Button>
                {options.length > 0 ?
                    <Button variant="primary" onClick={handleSave}>
                        שמירה                        </Button> : ""}
            </Modal.Footer>
        </Modal>
    </>
}

export default Popup