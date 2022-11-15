import React, { useState } from 'react'
import BasicFiles from './basic'

function Daycare({ setData, data, student }) {
    const [daycare, setDaycare] = useState({})

    const submit = () => {
        const name = "daycare"
        const value = daycare
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }
    let arrfile = [{ name: "החלטת ועדת השמה", date: true }, { name: "ריפוי בעיסוק", date: false }]


    return (
        <div>
            <BasicFiles student={student} arrfile={arrfile} setService={setDaycare} onClick={submit} />
        </div>
    )
}

export default Daycare