import React, { useContext, useState } from 'react'
import StudentContext from '../../../context/StudentContext'
import BasicFiles from './basic'

function Housing({ setData,saveFile, data, remove }) {

    const { student } = useContext(StudentContext)
    const [housing, setHousing] = useState({})

    const submit = () => {
        const name = "housing"
        const value = housing
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }

    

    return (
        <div>
            <BasicFiles saveFile={saveFile} place="housing" arrfile={[{ name: "תעודת נכה", date: false }, { name: "אישור רווחה", date: true }]} setService={setHousing} onClick={submit} remove={remove} />
        </div>
    )
}

export default Housing