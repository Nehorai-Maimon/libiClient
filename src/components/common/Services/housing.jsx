import React, { useState } from 'react'
import BasicFiles from './basic'

function Housing({ service, setData, student, saveFile, data, remove }) {

    const [arrFile, setArrFile] = useState([{ name: "תעודת נכה", date: false }, { name: "אישור רווחה", date: true }])


    return <BasicFiles student={student} saveFile={saveFile} service={service} arrfile={arrFile} remove={remove} />
}

export default Housing