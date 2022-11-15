import React, { useState } from 'react'
import BasicFiles from './basic'

function Club({ setData, data, student }) {
    const [club, setClub] = useState({})

    const submit = () => {
        const name = "club"
        const value = club
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }
    let arrfile = [{ name: "אבחון", date: true }, { name: "רישום שנתי", date: false }]


    return (
        <div>
            <BasicFiles student={student} arrfile={arrfile} setService={setClub} onClick={submit} />
        </div>
    )
}

export default Club