import { Download, Trash } from "react-bootstrap-icons";
import React, { useState, useEffect } from 'react'
import File from '../../components/common/File'
import remove from '../../images/delete.png'

function FixedFiles({ studentFiles, deleteFile, saveFile, arrfile, student, service }) {
    const REACT_APP_IP = process.env.REACT_APP_IP

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
    }

    useEffect(() => {
        setReactArr([...arrfile])
        const prev = [...reactArr]
        for (let i in student?.daycare?.general.files) {
            for (let r in prev) {
                if (student?.daycare?.general.files[i].inputName === prev[r].name) {
                    prev.splice(r, 1)
                    setReactArr(prev)
                }
            }
        }
    }, [studentFiles])

    function downloadFile(filePath) {
        fetch('https://' + REACT_APP_IP+ '/student/files', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filePath })
        })
            .then((response) => response.json())
            .then(data => window.open(data.server, "_blank"))
            .catch(error => console.error('Error:', error));
    }

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

            {service === 'general' ? <div style={{ display: "flex", direction: "rtl" }}>
                {student?.daycare?.general.files?.map((v, index) => {
                    return <div key={index} className='show-files-daycare'>
                        <div>{v.fileName} :{v.inputName}</div>
                        <div className='file-function' >
                            <div className='file-function-spc' onClick={() => deleteFile(v.filePath)}><Trash /></div>
                            <div className='file-function-spc' onClick={() => downloadFile(v.filePath)}><Download /></div>
                        </div>
                    </div>
                })}
                {student?.daycare?.general.filesOp?.map((v, index) => {
                    return <div key={index} className='show-files-daycare'>
                        <div>{v.fileName} :{v.inputName}</div>
                        <div className='file-function' >
                            <div className='file-function-spc' onClick={() => deleteFile(v.filePath)}><Trash /></div>
                            <div className='file-function-spc' onClick={() => downloadFile(v.filePath)}><Download /></div>
                        </div>
                    </div>
                })}
            </div>
                :
                <div>

                    {student?.daycare?.general.year?.map((v, index) => {
                        return v[service].files.map(x => {
                            return <div key={index} className='show-files-daycare'>
                                <div>{x.fileName} :{x.inputName}</div>
                                <div className='file-function' >
                                    <div className='file-function-spc' onClick={() => deleteFile(x.filePath, v.year)}><Trash /></div>
                                    <div className='file-function-spc' onClick={() => downloadFile(v.filePath)}><Download /></div>
                                </div>
                            </div>
                        })
                    })}
                    {student?.daycare?.general.year?.map((v, index) => {
                        return v[service].filesOp.map(x => {
                            return <div key={index} className='show-files-daycare'>
                                <div>{x.fileName} :{x.inputName}</div>
                                <div className='file-function' >
                                    <div className='file-function-spc' onClick={() => deleteFile(x.filePath, v.year)}><Trash /></div>
                                    <div className='file-function-spc' onClick={() => downloadFile(v.filePath)}><Download /></div>
                                </div>
                            </div>
                        })
                    })}
                </div>}
        </div>

        <button style={{ marginBottom: "30px" }} onClick={() => addFile()} className="btnadd">הוספת טופס  +</button>

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