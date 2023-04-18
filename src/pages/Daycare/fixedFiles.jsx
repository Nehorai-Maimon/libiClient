import React, { useState, useEffect } from 'react'
import { Download } from "react-bootstrap-icons";
import File from '../../components/common/File'
import { Trash } from "react-bootstrap-icons";
import remove from '../../images/delete.png'

function FixedFiles({ studentFiles, deleteFile, saveFile, arrfile, student, service }) {

    const [listFile, setListFile] = useState()
    const [fileName, setFileName] = useState("")
    const [reactArr, setReactArr] = useState([])


    const addFile = () => {
        if (!listFile) {
            setListFile([{ file: "" }])
        } else {
            if (!listFile.length) {
                setListFile([{ file: "" }])
            } else {
                setListFile([...listFile, { file: "" }])
            }
        }
    }

    const removeFile = (index) => {
        const newList = [...listFile]
        newList.splice(index, 1);
        setListFile(newList);
        // מחיקה בשרת
        // return (
        //     delete fileOp[`file optionaly ${index + 1}`]
        // )
    }

    useEffect(() => {
        setReactArr([...arrfile])
        const prev = [...reactArr]
        if (student?.daycare?.general.files.length) {
            for (let i in student?.daycare?.general.files) {
                for (let r in prev) {
                    if (student?.daycare?.general.files[i].inputName === prev[r].name) {
                        prev.splice(r, 1)
                        setReactArr(prev)
                    }
                }
            }
        }
    }, [studentFiles])

    return <div className="container">
        <div className='title'>
            <div className="subTitle">טפסים כלליים</div>
        </div>
        <div className='files'>
            {reactArr?.map((v, index) => {
                return <File service={service} daycare saveFile={saveFile} defaultValue="" placeholder={v.name} name={v.name} />
            })}
        </div>
        <div className='files'>
            <div className="subTitle">:טפסים שהועלו לשרת</div>
            {student?.daycare?.general.files?.map((v, index) => {
                return <div className='show-files-daycare'>
                    <div>{v.inputName}</div>
                    <div>:שם הקובץ<br />{v.fileName}</div>
                    <div className='file-function' >
                        <div className='file-function-spc' onClick={() => deleteFile(v.filePath)}><Trash /></div>
                        <div className='file-function-spc'><Download /></div>
                    </div>
                </div>
            })}
            {student?.daycare?.general.filesOp?.map((v, index) => {
                return <div className='show-files-daycare'>
                    <div>{v.inputName}</div>
                    <div>:שם הקובץ<br />{v.fileName}</div>
                    <div className='file-function' >
                        <div className='file-function-spc' onClick={() => deleteFile(v.filePath)}><Trash /></div>
                        <div className='file-function-spc'><Download /></div>
                    </div>
                </div>
            })}
        </div>
        <button onClick={() => addFile()} className="btnadd">הוספת טופס  +</button>

        <div className='filesOp'>
            {listFile?.map((x, index) => {
                return <div className="removeBtn">
                    <File saveFile={saveFile} service={service} defaultValue={x.fileName}
                        optional fileName={fileName} setFileName={setFileName} name={x.fileName || `file optionaly ${index + 1}`} />

                    {listFile.length - 1 == index &&
                        <img className="removeImg" onClick={() => removeFile(index)}

                            src={remove} alt={"delete"} />}
                </div>
            })}
        </div>
    </div >
}

export default FixedFiles