import React, { useEffect, useState } from 'react'
import File from '../File'
import remove from '../../../images/delete.png'
import styles from "./style.module.css"

function BasicFiles({ service, data, saveFile, arrFile = [], setArrFile, student }) {
    const [listFile, setListFile] = useState([{ file: "" },]);
    const [fileName, setFileName] = useState("")
    const [fileOp, setFileOp] = useState([]);
    const [reactArr, setReactArr] = useState([]);

    const addFile = () => {
        setListFile([...listFile, { file: "" }])
    }

    const removeFile = (index) => {
        const newList = [...listFile]
        newList.splice(index, 1);
        setListFile(newList);
        return (
            delete fileOp[`file optionaly ${index + 1}`]
        )
    }

    useEffect(() => { console.log(service); }, [service])
    useEffect(() => { console.log("reactArr", reactArr); }, [reactArr])

    useEffect(() => {
        setReactArr([...arrFile])
        const prev = [...reactArr]
        if (service === "general") {
            console.log("general arrFile", arrFile);
            //  לבדוק שעובד
            if (data?.sensitivity === "כן" || student?.sensitivity === "כן") {
                arrFile.push({ name: "רגישות רפואית", date: true })
            }
            for (let i in student?.general.files) {
                for (let r in prev) {
                    if (student?.general.files[i].inputName === prev[r].name) {
                        prev.splice(r, 1)
                        setReactArr(prev)
                    }
                }
            }
        }
        if (service === "housing") {
            console.log("housing arrFile", arrFile);
            for (let i in student?.housing.files) {
                for (let r in prev) {
                    if (student?.housing.files[i].inputName === prev[r].inputName) {
                        prev.splice(r, 1)
                        setReactArr(prev)
                    }
                }
            }
        }
        if (service === "employment") {
            console.log("employment arrFile", arrFile);
            for (let i in student?.employment.files) {
                for (let r in prev) {
                    if (student?.employment.files[i].inputName === prev[r].inputName) {
                        prev.splice(r, 1)
                        setReactArr(prev)
                    }
                }
            }
        }
        if (service === "club") {
            console.log("club arrFile", arrFile);
            for (let i in student?.club.files) {
                for (let r in prev) {
                    if (student?.club.files[i].inputName === prev[r].inputName) {
                        prev.splice(r, 1)
                        setReactArr(prev)
                    }
                }
            }
        }
    }, [student, service])

    // ליצור תאריך תפוגה שיתן הזהרה לפני שנגמר התוקף
    // const handleChangeDate = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     file[file.length - 1].date = value
    //     // setFile(values => ({ ...values, [name]: value }));
    // }

    return <div className={"styles.container"}>
        <div className={styles.subTitle}>טפסי חובה</div>
        {reactArr?.map((v, index) => {
            return (
                <File saveFile={saveFile} service={service} placeholder={v.name} name={v.name} date={v.date} />
            )
        })}
        {/* {arrFile.map(v=>v.name)} */}
        {/* <File placeholder={"אישור לצילום החניך"} name={"pictures"} onChangeFile={onChangeFile} />
            <File placeholder={"אישור רווחה"} name={"welfare certificate"} date onChangeDate={handleChangeDate} onChangeFile={onChangeFile} /> */}

        <div className={styles.addBtn}>
            <div className={styles.subTitle}>טפסי רשות</div>
        </div>

        {listFile.map((x, index) => {
            return (
                <div className={styles.remove}>
                    <div className={styles.removeBtn}>
                        <File saveFile={saveFile} service={service} optional fileName={fileName} setFileName={setFileName} name={`file optionaly ${index + 1}`} />

                        {listFile.length - 1 == index && index > 0 &&
                            <img className={styles.removeImg} onClick={() => removeFile(index)}

                                src={remove} alt={"delete"} />}
                    </div>
                </div>)
        })}

        <div className={styles.buttons}>
            <button type='button' onClick={() => addFile()} className={styles.btnadd}>טופס נוסף +</button>
        </div>
    </div>
}

export default BasicFiles