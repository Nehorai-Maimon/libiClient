import React, { useState } from 'react'
import BasicFiles from './basic'

function Employment({ setData, data }) {
    const [employment, setEmployment] = useState({})


    const submit = () => {
        const name = "employment"
        const value = employment
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }


    return (
        <div>
            <BasicFiles arrfile={[{ name: "אישור לצילום החניך", date: false }, { name: "אישור רווחה", date: true }]} setService={setEmployment} onClick={submit} />
        </div>
    )
}

export default Employment