import React, { useState } from 'react'
import BasicFiles from './basic'

function General({ setData, data, student }) {
    const [general, setGeneral] = useState({})


    const submit = () => {
        const name = "general"
        const value = general
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }


    return (
        <div>כללי
            <BasicFiles student={student} arrfile={[{ name: "אישור לצילום החניך", date: false }, { name: "אישור רווחה", date: true }]} setService={setGeneral} onClick={submit} />
        </div>
    )
}

export default General