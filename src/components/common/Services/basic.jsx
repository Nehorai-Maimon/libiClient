import React, { useEffect, useState } from 'react'
import File from '../File'
import remove from '../../../images/delete.png'
import styles from "./style.module.css"

function BasicFiles({ service ,saveFile, onClick,arrFile, setArrFile, student }) {
    const [listFile, setListFile] = useState([{ file: "" },]);
    const [fileName, setFileName] = useState("")
    const [fileOp, setFileOp] = useState([]);

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


// ליצור תאריך תפוגה שיתן הזהרה לפני שנגמר התוקף
    // const handleChangeDate = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     file[file.length - 1].date = value
    //     // setFile(values => ({ ...values, [name]: value }));
    // }
    
    return (
       
        <div className={"styles.container"}>
            <div className={styles.subTitle}>טפסי חובה</div>
            {arrFile?.map((v, index) => {
                return (
                    <File saveFile={saveFile} service={service} placeholder={v.name} name={v.name} date={v.date}/>
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
    )
}

export default BasicFiles