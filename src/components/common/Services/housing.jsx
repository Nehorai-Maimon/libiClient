import React, { useState } from 'react'
import BasicFiles from './basic'

function Housing({ setData, data }) {
    const [housing, setHousing] = useState({})

    const submit = () => {
        const name = "housing"
        const value = housing
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }


    return (
        <div>
            <BasicFiles arrfile={[{ name: "אישור לצילום החניך", date: false }, { name: "אישור רווחה", date: true }]} setService={setHousing} onClick={submit} />
        </div>
    )
}

export default Housing