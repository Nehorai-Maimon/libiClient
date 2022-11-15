import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from '../Select';
import './style.css'

function Popup({ setArr, arrServices }) {
    const [show, setShow] = useState(false);
    let arrChoose = []

    const handleClose = () => {
        setShow(false)
    }
    const handleSave = () => {
        setArr([...arrServices, arrChoose[arrChoose.length - 1]])
        setShow(false)
        console.log(arrServices)

    }
    const [options, setOptions] = useState(["דיור", "תעסוקה", "מעון", "מרכז יום", "מועדונית"])
    let intersection = options.filter(x => !arrServices.includes(x));

    useEffect(() => {
        setOptions(intersection)
    }, [arrServices])


    const handleShow = () => setShow(true);


    return (
        <>
            <Button className='btnPopup' variant="primary" onClick={handleShow}>
                הוספת שירות            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='popupHeader' closeButton>
                    <Modal.Title>הוספת שירות</Modal.Title>
                </Modal.Header>
                <Modal.Body>בחרו שירות מהרשימה

                    {options.length > 0 ?
                        <Select placeholder={"בחרו שירות..."} options={options} onChange={(e) => arrChoose.push(e.target.value)} /> :
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
    );
}

export default Popup