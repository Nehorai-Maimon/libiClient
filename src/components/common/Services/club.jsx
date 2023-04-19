import React, { useState } from 'react'
import BasicFiles from './basic'

function Club({ saveFile, setData, data, student }) {
    const [club, setClub] = useState({})

    const submit = () => {
        const name = "club"
        const value = club
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }
    
    let arrfile = [{ name: "אבחון", date: true }, { name: "רישום שנתי", date: false }]

    return <BasicFiles saveFile={saveFile} place="club" student={student} arrfile={arrfile} setService={setClub} onClick={submit} />
}

export default Club