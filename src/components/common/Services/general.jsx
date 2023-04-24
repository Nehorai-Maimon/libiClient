import React, { useState } from 'react'
import BasicFiles from './basic'

function General({ service, setData, saveFile, data, student }) {
    const [arrFile, setArrFile] = useState([{ name: "צילום ת.ז ילד/הורה", date: false }, { name: "ויתור סודיות", date: false }])

    return <div>כללי
        <BasicFiles saveFile={saveFile} service={service} student={student} arrFile={arrFile} setArrFile={setArrFile} />
    </div>
}

export default General