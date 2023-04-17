import React, { useEffect, useState } from 'react'
import BasicFiles from './basic'


function General({ setData, saveFile, data, student }) {
    const [general, setGeneral] = useState({})
    const [arrFile, setArrFile] = useState([{ name: "צילום ת.ז ילד/הורה", date: false }, { name: "ויתור סודיות", date: false }])
    
    // console.log(arrFile);

    const submit = (e) => {
        e.preventDefault()
        const name = "general"
        const value = general
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);

        // console.log("data.general.files", data.general.files);
    }

    //  לבדוק שעובד
    if (data?.sensitivity?.sensitivity === "כן" || student?.sensitivity?.sensitivity === "כן") {
        const prev = [...arrFile]
        prev.push({ name: "רגישות רפואית", date: true })
        setArrFile(prev)
    }

    return (
        <div>כללי
            <BasicFiles saveFile={saveFile} service="general" student={student} arrFile={arrFile} setArrFile={setArrFile} setService={setGeneral} onClick={(e) => submit(e)} />
        </div>
    )
}

export default General