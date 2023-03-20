import React, { useEffect, useState } from 'react'
import File from '../File'
import remove from '../../../images/delete.png'
import styles from "./style.module.css"

function BasicFiles({ setService, place ,saveFile, onClick, arrfile = [], student }) {
    const [listFile, setListFile] = useState([{ file: "" },]);
    const [fileName, setFileName] = useState("")

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

    const [file, setFile] = useState([]);
    const [fileOp, setFileOp] = useState([]);

    const onChangeFile = async (e) => {
        const name = e.target.name
        console.dir(e.target);
        // const fileSize = (e.target.size / 1000) + "KB";
        // setFile((current) => ({
        //     ...current,
        //     [name]: {
        //         fileName: e.target.files[0].name,
        //         size: fileSize,
        //         type: e.target.files[0].type
        //     }
        // })
        // )

        file.push({ name: name, file: e.target.files[0], date: "" })
    }

    const handleChangeDate = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        file[file.length - 1].date = value
        // setFile(values => ({ ...values, [name]: value }));
    }
    
    const handleChangeFileOp = async (e) => {
        const name = e.target.name
        // const fileSize = (e.target.files[0].size / 1000) + "KB";
        // setFileOp(values => ({
        //     ...values, [name]: {
        //         fileNameInput: fileName,
        //         fileName: e.target.files[0].name,
        //         size: fileSize,
        //         type: e.target.files[0].type
        //     }
        // }))

        fileOp.push({ name: name, file: e.target.files[0] })
        setFileName("")
    }

    useEffect(() => {
        const name = "files"
        const value = file
        setService(values => ({ ...values, [name]: value }));
    }, [file])

    useEffect(() => {
        const name = "filesOp"
        const value = fileOp
        setService(values => ({ ...values, [name]: value }));

        // setFile(values => ({ ...values, [name]: value }));
    }, [fileOp])


    return (
        <div className={"styles.container"}>
            <div className={styles.subTitle}>טפסי חובה</div>
            {arrfile.map((e, index) => {
                return (
                    <File saveFile={saveFile} place={place} placeholder={e.name} file={file} name={e.name} date={e.date} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                )
            })}
            {/* <File placeholder={"אישור לצילום החניך"} name={"pictures"} onChangeFile={onChangeFile} />
            <File placeholder={"אישור רווחה"} name={"welfare certificate"} date onChangeDate={handleChangeDate} onChangeFile={onChangeFile} /> */}

            <div className={styles.addBtn}>
                <div className={styles.subTitle}>טפסי רשות</div>
            </div>
            {listFile.map((x, index) => {
                return (
                    <div className={styles.remove}>
                        <div className={styles.removeBtn}>
                            <File saveFile={saveFile} place={place} onChangeFile={handleChangeFileOp} optional fileName={fileName} setFileName={setFileName} name={`file optionaly ${index + 1}`} />

                            {listFile.length - 1 == index && index > 0 &&
                                <img className={styles.removeImg} onClick={() => removeFile(index)}

                                    src={remove} alt={"delete"} />}
                        </div>
                    </div>)
            })}

            <div className={styles.buttons}>
                <button type='button' onClick={() => addFile()} className={styles.btnadd}>טופס נוסף +</button>
                {/* <button onClick={(e) => onClick(e)} className={styles.btnadd}>שמירה</button> */}
            </div>

        </div>
    )
}

export default BasicFiles