import React, { useState, useEffect, useRef } from 'react'
import File from '../../components/common/File';
import Input from '../../components/common/Input'
import Select from '../../components/common/Select'
import SwitchBtn from '../../components/common/SwitchBtn/SwitchBtn';
import styles from "./style.module.css"
import remove from '../../images/delete.png'


function CreateStudent() {

    const [data, setData] = useState({});
    const [status, setStatus] = useState(true)
    const [file, setFile] = useState({});
    const [listMedication, setListMedication] = useState([{ med: "" },]);
    const [listContact, setListContact] = useState([{ con: "" },]);

    const addContact = () => {
        setListContact([...listContact, { con: "" }])
    }
    const removeContact = (index) => {
        const newList = [...listContact]
        newList.splice(index, 1);
        setListContact(newList);
        return (
            delete data[`contactFirstName${index + 1}`],
            delete data[`contactLastName${index + 1}`],
            delete data[`contactPhone${index + 1}`],
            delete data[`relative${index + 1}`])
    }

    const addMedication = () => {
        setListMedication([...listMedication, { med: "" }])
    }

    const removeMedication = (index) => {
        const newList = [...listMedication]
        newList.splice(index, 1);
        setListMedication(newList);
        return (
            delete data[`medication${index + 1}`],
            delete data[`medicationTime${index + 1}`])
    }

    const submit = () => {
        console.log(data)
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));
    }


    useEffect(() => {
        const name = "status";
        const value = status
        setData(values => ({ ...values, [name]: value }));
    }, [status])

    useEffect(() => {
        const name = "files"
        const value = file
        setData(values => ({ ...values, [name]: value }));
    }, [file])


    const onChangeFile = (e) => {
        const name = e.target.name
        const fileSize = (e.target.files[0].size / 1000) + "KB";
        setFile((current) => ({
            ...current,
            [name]: {
                fileName: e.target.files[0].name,
                size: fileSize,
                type: e.target.files[0].type
            }
        })
        )
    }

    return (
        <div>
            <form >
                <div className={styles.title}>יצירת חניך חדש / עריכת חניך קיים
                    <div className={styles.save}>
                        <SwitchBtn label={"סטטוס פעיל"} status={status} setStatus={setStatus} />
                        <button name="submit" className={styles.btn} onClick={() => submit()} >שמירה</button>
                    </div>
                </div>
                <div className={styles.createStudent}>
                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <div className={styles.subTitle}>פרטים אישיים של החניך</div>
                            <Input placeholder={"שם פרטי"} required={true} name={"firstName"} onChange={handleChange} />
                            <Input placeholder={"שם משפחה"} required={true} name={"lastName"} onChange={handleChange} />
                            <Input placeholder={"תעודת זהות"} required={true} name={"id"} type={"number"} onChange={handleChange} />
                            <Select placeholder={"מין"} required={true} options={["זכר", "נקבה"]} name={"gender"} onChange={handleChange} />
                            <Input placeholder={"תאריך לידה"} required={true} name={"DateOfBirth"} onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                            <Input placeholder={"טלפון (רשות)"} required={false} name={"phone"} type={"number"} onChange={handleChange} />
                            <Input placeholder={"(רשות) אימייל"} required={false} name={"email"} type={"email"} onChange={handleChange} />


                        </div>

                        <div className={styles.container}>
                            <div className={styles.addBtn}>
                                <button onClick={() => addContact()} className={styles.btn}>איש קשר נוסף  +</button>
                                <div className={styles.subTitle}>פרטי איש קשר</div>
                            </div>
                            {listContact.map((x, index) => {
                                return (
                                    <>
                                        <div className={styles.removeBtn}>

                                            {listContact.length > 1 &&
                                                <div key={index} className={styles.subTitle}>איש קשר מספר {index + 1}</div>}
                                            {listContact.length - 1 == index && index > 0 &&
                                                <img className={styles.removeImg} onClick={() => removeContact(index)}

                                                    src={remove} alt={"delete"} />}
                                        </div>
                                        <Input placeholder={"שם פרטי"} required={true} name={`contactFirstName${index + 1}`} onChange={handleChange} />
                                        <Input placeholder={"שם משפחה"} required={true} name={`contactLastName${index + 1}`} onChange={handleChange} />
                                        <Input placeholder={"טלפון"} required={true} name={`contactPhone${index + 1}`} type={"number"} onChange={handleChange} />
                                        <Select placeholder={"קירבה לחניך"} required={true} options={["אבא", "אמא", "אח", "אחות"]} name={`relative${index + 1}`} onChange={handleChange} />

                                    </>)
                            })}




                        </div>
                    </div>

                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <div className={styles.subTitle}>טפסים ואישורים</div>
                            <File placeholder={"אישור לצילום החניך"} name={"pictures"} onChangeDate={handleChange} onChangeFile={onChangeFile} />
                            <File placeholder={"אבחון פסיכולוגי"} name={"psychological"} onChangeDate={handleChange} onChangeFile={onChangeFile} />
                            <File placeholder={"אבחון פסיכיאטרי"} name={"psychiatric"} onChangeDate={handleChange} onChangeFile={onChangeFile} />
                            <File placeholder={"אישור רווחה"} name={"welfare certificate"} onChangeDate={handleChange} onChangeFile={onChangeFile} />





                        </div>
                        <div className={styles.subContainer}>

                            <div className={styles.container}>
                                <div className={styles.subTitle}>על החניך ומשפחתו, מטרות ויעדים</div>
                                <textarea placeholder={"...נתונים על החניך בשפה חופשית"} name={"text a"} onChange={handleChange} />
                                <textarea placeholder={"...נתונים על משפחת החניך בשפה חופשית"} name={"text b"} onChange={handleChange} />
                                <textarea placeholder={"...יעדי הארגון לחניך"} name={"text c"} onChange={handleChange} />
                                <textarea placeholder={"...מטרות לשנה הקרובה"} name={"text d"} onChange={handleChange} />


                            </div>


                            <div className={styles.container}>
                                <div className={styles.addBtn}>
                                    <button onClick={() => addMedication()} className={styles.btn}>תרופה נוספת +</button>
                                    <div className={styles.subTitle}>טיפול תרופתי</div>
                                </div>

                                {listMedication.map((x, index) => {
                                    return (
                                        <>
                                            <div className={styles.removeBtn}>
                                                {listMedication.length > 1 &&
                                                    <div key={index} className={styles.subTitle}>תרופה מספר {index + 1}</div>}
                                                {listMedication.length - 1 == index && index > 0 &&
                                                    <img className={styles.removeImg} onClick={() => removeMedication(index)}
                                                        src={remove} alt={"delete"} />}
                                            </div>
                                            <Input placeholder={"שם התרופה"} required={true} name={`medication${index + 1}`} onChange={handleChange} />
                                            <Input placeholder={"שעת נטילה"} required={true} name={`medicationTime${index + 1}`}
                                                onFocus={(e) => (e.target.type = "time")}
                                                onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                                        </>
                                    )
                                })}



                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateStudent