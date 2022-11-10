import React, { useState, useEffect, useRef } from 'react'
import SwitchBtn from '../../components/common/SwitchBtn/SwitchBtn';
import styles from "./style.module.css"
import Accordions from '../../components/common/Accordions/files';
import StudentDetails from '../../components/common/Accordions/StudentDetails'
import ContactDetails from '../../components/common/Accordions/Contacts';
import Medications from '../../components/common/Accordions/medications';
import AboutStudent from '../../components/common/Accordions/AboutStudent';


function CreateStudent() {

    const [data, setData] = useState({});
    const [status, setStatus] = useState(true)


    const submit = () => {
        console.log(data)
    }






    useEffect(() => {
        const name = "status";
        const value = status
        setData(values => ({ ...values, [name]: value }));
    }, [status])


    return (
        <div>
            <form >
                <div className={styles.title}>יצירת חניך חדש
                    <div className={styles.save}>
                        <SwitchBtn label={"סטטוס פעיל"} status={status} setStatus={setStatus} />
                        <button name="submit" className={styles.btnadd} onClick={() => submit()} >שמירה</button>
                    </div>
                </div>
                <div className={styles.createStudent}>
                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <StudentDetails setData={setData} />

                        </div>

                        <div className={styles.container}>

                            <ContactDetails setData={setData} />

                        </div>
                    </div>

                    <div className={styles.containers}>

                        <div className={styles.container}>
                            <AboutStudent setData={setData} />
                        </div>


                        <div className={styles.container}>

                            <Medications setData={setData} data={data} />


                        </div>
                    </div>
                    <div className={styles.containers}>
                        <div className={styles.container}>

                            <Accordions setData={setData} data={data} />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateStudent