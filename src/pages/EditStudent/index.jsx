import React, { useState, useEffect, useRef } from 'react'
import File from '../../components/common/File';
import Input from '../../components/common/Input'
import Select from '../../components/common/Select'
import SwitchBtn from '../../components/common/SwitchBtn/SwitchBtn';
import styles from "./style.module.css"
import remove from '../../images/delete.png'
import student from '../../fakeData'
import students from '../../fakeData';


function EditStudent() {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(true)
    const [file, setFile] = useState({});
    const [contact, setContact] = useState({});
    const [medication, setMedication] = useState({});


    const student = students[0]
    //אוביקט מידע על חניך. יתקבל מהשרת
    // const student = {
    //     firstName: "מיכל", lastName: "שגיא", id: "123456789", gender: "נקבה", date: "15/10/1993", phone: "0525000000", email: "michal@gmail.com",
    //     contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    //     file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    //     textA: "בלה בלה בלה", textB: "בלה בלה בלה", textC: "בלה בלה בלה",
    //     medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
    // }

    const [listContact, setListContact] = useState(student.contact.map(e => ({ contactFirstName: e.contactFirstName, contactLastName: e.contactLastName, contactPhone: e.contactPhone, relative: e.relative })));
    const [listMedication, setListMedication] = useState(student.medication.map(e => ({ name: e.name, time: e.time })));
    const addContact = () => {
        setListContact([...listContact, { con: "" }])
    }
    const removeContact = (index) => {
        const newList = [...listContact]
        newList.splice(index, 1);
        setListContact(newList);
        // return (
        //     delete data.contact[`contactFirstName${index + 1}`],
        //     delete data.contact[`contactLastName${index + 1}`],
        //     delete data.contact[`contactPhone${index + 1}`],
        //     delete data.contact[`relative${index + 1}`])
        return (
            data.contact[`contactFirstName${index + 1}`] = "delete",
            data.contact[`contactLastName${index + 1}`] = "delete",
            data.contact[`contactPhone${index + 1}`] = "delete",
            data.contact[`relative${index + 1}`] = "delete")
    }

    const addMedication = () => {
        setListMedication([...listMedication, { med: "" }])
    }

    const removeMedication = (index) => {
        const newList = [...listMedication]
        newList.splice(index, 1);
        setListMedication(newList);
        // return (
        //     delete data.medication[`medication${index + 1}`],
        //     delete data.medication[`medicationTime${index + 1}`])
        return (
            data.medication[`medication${index + 1}`] = "delete",
            data.medication[`medicationTime${index + 1}`] = "delete")
    }

    const submit = () => {
        console.log(data)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));

    }
    const handleChangeDate = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFile(values => ({ ...values, [name]: value }));
    }
    const handleChangeContact = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact(values => ({ ...values, [name]: value }));
    }
    const handleChangeMedication = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMedication(values => ({ ...values, [name]: value }));
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
    useEffect(() => {
        const name = "contact"
        const value = contact
        setData(values => ({ ...values, [name]: value }));
    }, [contact])
    useEffect(() => {
        const name = "medication"
        const value = medication
        setData(values => ({ ...values, [name]: value }));
    }, [medication])


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
                <div className={styles.title}>עריכת חניך קיים
                    <div className={styles.save}>
                        <SwitchBtn label={"סטטוס פעיל"} status={status} setStatus={setStatus} />
                        <button name="submit" className={styles.btn} onClick={() => submit()} >שמירה</button>
                    </div>
                </div>
                <div className={styles.createStudent}>
                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <div className={styles.subTitle}>פרטים אישיים של החניך</div>
                            <Input defaultValue={student.firstName} placeholder={"שם פרטי"} required={true} name={"firstName"} onChange={handleChange} />
                            <Input defaultValue={student.lastName} placeholder={"שם משפחה"} required={true} name={"lastName"} onChange={handleChange} />
                            <Input defaultValue={student.id} placeholder={"תעודת זהות"} required={true} name={"id"} type={"number"} onChange={handleChange} />
                            <Select defaultValue={student.gender} placeholder={"מין"} required={true} options={["זכר", "נקבה"]} name={"gender"} onChange={handleChange} />
                            <Input defaultValue={student.date} placeholder={"תאריך לידה"} required={true} name={"DateOfBirth"} onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                            <Input defaultValue={student?.phone} placeholder={"טלפון (רשות)"} required={false} name={"phone"} type={"number"} onChange={handleChange} />
                            <Input defaultValue={student?.email} placeholder={"(רשות) אימייל"} required={false} name={"email"} type={"email"} onChange={handleChange} />


                        </div>

                        <div className={styles.container}>
                            <div className={styles.addBtn}>
                                <button onClick={() => addContact()} className={styles.btn}>איש קשר נוסף  +</button>
                                <div className={styles.subTitle}>פרטי איש קשר</div>
                            </div>


                            {listContact.map((e, index) => {
                                return (
                                    <>
                                        <div className={styles.removeBtn}>

                                            {listContact.length > 1 &&
                                                <div key={index} className={styles.subTitle}>איש קשר מספר {index + 1}</div>}
                                            {listContact.length - 1 == index && index > 0 &&
                                                <img className={styles.removeImg} onClick={() => removeContact(index)}

                                                    src={remove} alt={"delete"} />}
                                        </div>
                                        <Input defaultValue={listContact[index]?.contactFirstName} placeholder={"שם פרטי"} required={true} name={`contactFirstName${index + 1}`} onChange={handleChangeContact} />
                                        <Input defaultValue={listContact[index]?.contactLastName} placeholder={"שם משפחה"} required={true} name={`contactLastName${index + 1}`} onChange={handleChangeContact} />
                                        <Input defaultValue={listContact[index]?.contactPhone} placeholder={"טלפון"} required={true} name={`contactPhone${index + 1}`} type={"number"} onChange={handleChangeContact} />
                                        <Select defaultValue={listContact[index]?.relative} placeholder={"קירבה לחניך"} required={true} options={["אבא", "אמא", "אח", "אחות"]} name={`relative${index + 1}`} onChange={handleChangeContact} />

                                    </>
                                )
                            })}



                        </div>
                    </div>

                    <div className={styles.containers}>
                        <div className={styles.container}>
                            <div className={styles.subTitle}>טפסים ואישורים</div>
                            <File defaultValue={student.file[0]?.date} placeholder={"אישור לצילום החניך"} name={"pictures"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                            <File defaultValue={student.file[1]?.date} placeholder={"אבחון פסיכולוגי"} name={"psychological"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                            <File defaultValue={student.file[2]?.date} placeholder={"אבחון פסיכיאטרי"} name={"psychiatric"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                            <File defaultValue={student.file[3]?.date} placeholder={"אישור רווחה"} name={"welfare certificate"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />





                        </div>
                        <div className={styles.subContainer}>

                            <div className={styles.container}>
                                <div className={styles.subTitle}>על החניך ומשפחתו, מטרות ויעדים</div>
                                <textarea defaultValue={student?.textA} placeholder={"...נתונים על החניך בשפה חופשית"} name={"text a"} onChange={handleChange} />
                                <textarea defaultValue={student?.textB} placeholder={"...נתונים על משפחת החניך בשפה חופשית"} name={"text b"} onChange={handleChange} />
                                <textarea defaultValue={student?.textC} placeholder={"...יעדי הארגון לחניך"} name={"text c"} onChange={handleChange} />
                                <textarea defaultValue={student?.textD} placeholder={"...מטרות לשנה הקרובה"} name={"text d"} onChange={handleChange} />


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
                                            <Input defaultValue={listMedication[index].name} placeholder={"שם התרופה"} required={true} name={`medication${index + 1}`} onChange={handleChangeMedication} />
                                            <Input defaultValue={listMedication[index].time} placeholder={"שעת נטילה"} required={true} name={`medicationTime${index + 1}`}
                                                onFocus={(e) => (e.target.type = "time")}
                                                onBlur={(e) => (e.target.type = "text")} onChange={handleChangeMedication} />
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

export default EditStudent