import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { projects } from '../../../fakeData';
import TableStudentProj from '../TableStudentProj';
// import Input from '../Input';
// import Select from '../Select';


import './style.css'

function PopupAddStudent({ studentsToProject, setStudentsToProject }) {

    const [studentArr, setStudentArr] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }
    const handleSave = () => {
        setShow(false)
        setStudentsToProject(studentArr)
        console.log("popup", studentArr);
    }

    const handleShow = () => setShow(true);


    return (
        <>

            <button onClick={handleShow}>  ➕  הזמן חניכים לאירוע</button>


            <Modal show={show} onHide={handleClose}

            >
                <Modal.Header className='popupHeader' closeButton>
                    <Modal.Title>יבוא חניכים לאירוע</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='innerPopupProject'>
                        <TableStudentProj studentArr={studentArr} setStudentArr={setStudentArr}
                        />
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

export default PopupAddStudent