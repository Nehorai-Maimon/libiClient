import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import BasicFiles from './basic'

function Employment({ service, saveFile, setData, data }) {
    const [popupFiles, setPopupFiles] = useState(false)
    const [arrFile, setArrFile] = useState([{ name: "אישור לצילום החניך", date: false }, { name: "אישור רווחה", date: true }])

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

    return <BasicFiles saveFile={saveFile} service={service} place="employment" arrfile={arrFile} />

}

export default Employment