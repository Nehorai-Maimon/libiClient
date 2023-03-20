import React, { useEffect, useState } from 'react'
import BasicFiles from './basic'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Employment({ saveFile, setData, data }) {
    const [employment, setEmployment] = useState({})
    const [popupFiles, setPopupFiles] = useState(false)

    useEffect(()=>{console.log(data);},[data])

    const submit = () => {
        const name = "employment"
        const value = employment
        setData(values => ({ ...values, [name]: value }));
        // console.log("done", data.employment);
        setPopupFiles(true)
    }

    function decrementFiles(i) {
        const newArr = []
        const prev = { ...data }
        prev.employment.files.map((file, r) => r !== i ? newArr.push(prev.employment.files[r]) : null)
        prev.employment.files = newArr
        setData(prev)
    }
    
    function decrementFilesOp(i) {
        const newArr = []
        const prev = { ...data }
        prev.employment.filesOp.map((file, r) => r !== i ? newArr.push(prev.employment.filesOp[r]) : null)
        prev.employment.filesOp = newArr
        setData(prev)
        data.employment.filesOp.splice(i, 1)
    }

    return (<div>

        <div>
            <BasicFiles saveFile={saveFile} place="employment" arrfile={[{ name: "אישור לצילום החניך", date: false }, { name: "אישור רווחה", date: true }]} setService={setEmployment} onClick={submit} />
        </div>
        <Modal show={popupFiles} onHide={() => setPopupFiles(false)}  >
            <Modal.Header closeButton>
                <Modal.Title>שמירת טפסים</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                להסרת טופס- לחץ/י עליו<br />
                טופסי חובה:
                {data.employment.files.length === 0 && <div>לא נבחרו טפסים</div>}
                {data.employment.files.map((file, i) => <div
                    style={{ border: "1px solid darkgray", cursor: "pointer" }}
                    onClick={() => decrementFiles(i)}>  {file.name === "" ? <div> {i + 1} טופס ללא שם</div> : <div> {i + 1} {file.name}</div>}</div>)}<br />
                טופסי רשות:
                {data.employment.filesOp.length === 0 && <div>לא נבחרו טפסים</div>}

                {data.employment.filesOp.map((file, i) => <div
                    style={{ border: "1px solid darkgray", cursor: "pointer" }}
                    onClick={() => decrementFilesOp(i)}> {file.name === "" ? <div> {i + 1} טופס ללא שם</div> : <div> {i + 1} {file.name}</div>}</div>)}<br />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => setPopupFiles(false)}>
                    שלח
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Employment