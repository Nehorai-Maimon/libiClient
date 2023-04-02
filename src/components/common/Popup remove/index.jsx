import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import remove from '../../../images/delete.png'
import './style.css'

function PopupRemove({ student, service, data, index, setArr, arrServices }) {
    const [show, setShow] = useState(false);

    const removeService = (index, e) => {
        const newList = [...arrServices]
        newList.splice(index, 1);
        setArr(newList);

        fetch('http://localhost:4000/student/updateArrService', {
            headers: {
                studentId: student?._id,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newList)
        })
            .then((response) => response.json())
            .then((result) => { console.log(result) })
            .catch((error) => { console.error('Error:', error); });
        return (
            e === "תעסוקה" ? delete data.employment :
                e === "דיור" ? delete data.housing :
                    e === "מעון" ? delete data.daycare :
                        e === "מועדונית" ? delete data.club : ""
        )
    }

    const handleClose = () => {
        setShow(false)
    }
    const handleRemove = () => {
        removeService(index, service)
        setShow(false)
    }

    const handleShow = () => setShow(true);

    if (!student) {
        return <div>loading...</div>
    }

    return (
        <>
            <img className="removeBtn" onClick={handleShow}

                src={remove} alt={"delete"} />


            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='popupHeader' closeButton>
                    <Modal.Title>מחיקת שירות</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='innerPopup'>
                        האם למחוק את השירות {service}?
                        {service === "תעסוקה" && data?.employment?.files?.length > 0 && <div>שים לב, שירות זה מכיל קבצים אשר ימחקו!</div>}
                        {service === "דיור" && data?.housing?.files?.length > 0 && <div>שים לב, שירות זה מכיל קבצים אשר ימחקו!</div>}
                        {service === "מעון" && data?.daycare?.files?.length > 0 && <div>שים לב, שירות זה מכיל קבצים אשר ימחקו!</div>}
                        {service === "מועדונית" && data?.club?.files?.length > 0 && <div>שים לב, שירות זה מכיל קבצים אשר ימחקו!</div>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        סגור
                    </Button>
                    <Button variant="primary" onClick={handleRemove}>
                        מחק                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupRemove