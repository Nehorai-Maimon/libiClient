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

    //יש באג בעמוד הזה, כל הזמן מתנתק בשליחה / שמירה
    const submit = () => {
        console.log(data)
        const general = data.general
        // console.log("general", general);
        delete data.general
        console.log("data after remove general", data);
        fetch('http://localhost:4000/student/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(data => console.log("data from server",data))
            // לאסוף את הפרטים כדי לשלוח את הקבצים למקום הנכון
            .catch(error => console.error('Error:', error));

        // לא לשכוח למחוק, הפונקציה הקודמת צריכה לקרוא לזאת
        gotResult()
        function gotResult() {

            // for(let i in general.files){
            //     fetch('http://localhost:4000/student/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(general.files[i]),
            // })
            //     .then((response) => response.json())
            //     .then(data => console.log(data))
            //     .catch(error => console.error('Error:', error));
                
            // }
            // for(let i in general.filesOp){
            //     fetch('http://localhost:4000/student/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(general.filesOp[i]),
            // })
            //     .then((response) => response.json())
            //     .then(data => console.log(data))
            //     .catch(error => console.error('Error:', error));
                
            // }
        }
    }
        




    useEffect(() => {
        const name = "status";
        const value = status
        setData(values => ({ ...values, [name]: value }));
    }, [status])


    return (
        <div className={styles.main}>
            <form >
                <div className={styles.title}>יצירת חניך חדש
                    <div className={styles.save}>
                        <SwitchBtn label={"סטטוס פעיל"} status={status} setStatus={setStatus} />
                        <button name="submit" type='button' className={styles.btnadd} onClick={() => submit()} >שמירה</button>
                    </div>
                </div>
                <div className={styles.createStudent}>
                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <StudentDetails data={data} setData={setData} />

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