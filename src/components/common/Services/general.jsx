import React, { useState } from 'react'
import BasicFiles from './basic'


function General({ setData, saveFile, data, student }) {
    const [general, setGeneral] = useState({})
    // const place = "general"

    const submit = (e) => {
        e.preventDefault()
        const name = "general"
        const value = general
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);

        // console.log("data.general.files", data.general.files);

       
    }
    let arrfile = [{ name: "צילום ת.ז ילד/הורה", date: false }, { name: "ויתור סודיות", date: false }]
    if (data?.sensitivity?.sensitivity === "כן" || student?.sensitivity?.sensitivity === "כן") { arrfile.push({ name: "רגישות רפואית", date: true }) }

    return (

        <div>כללי
            <BasicFiles saveFile={saveFile} place="general" student={student} arrfile={arrfile} setService={setGeneral} onClick={(e) => submit(e)} />
        </div>
       
    
    )
}

export default General