import React, { useState } from 'react'
import File from '../../components/common/File'
import remove from '../../images/delete.png'

function FixedFiles({ saveFile, place, arrfile = [], student, service }) {

    const [listFile, setListFile] = useState(student ? service === "general" ? student.general[0]?.filesOp :
        service === "speech" ? student.speech[0].fixed[0].filesOp :
            service === "occupation" ? student.occupation[0].fixed[0].filesOp :
                service === "physiotherapy" ? student.occupation[0].fixed[0].filesOp :
                    service === "dietician" ? student.dietician[0].fixed[0].filesOp :
                        service === "teacher" ? student.teacher[0].fixed[0].filesOp :
                            service === "medical" ? student.medical[0].fixed[0].filesOp :
                                service === "social" ? student.social[0].fixed[1].filesOp :
                                    [] : [])

    const [fileName, setFileName] = useState("")

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

    const [file, setFile] = useState([]);
    const [fileOp, setFileOp] = useState([]);
    const onChangeFile = (e) => {
        const name = e.target.name
        // const fileSize = (e.target.files[0].size / 1000) + "KB";
        file.push({ service, name: name, file: e.target.files[0].name, date: "" })
    }

    const handleChangeFileOp = (e) => {
        // const name = e.target.name
        // const fileSize = (e.target.files[0].size / 1000) + "KB";
        fileOp.push({ service, name: fileName, file: e.target.files[0].name })
        setFileName("")
    }

    return <div className="container">
        <div className='title'>
            <div className="subTitle">טפסים כלליים</div>
            <div className="addBtn">

            </div>
        </div>
        <div className='files'>
            {arrfile?.map((e, index) => {
                return <>
                    <File place={place} daycare saveFile={saveFile} defaultValue="" placeholder={e.name} name={e.name}
                    // onChangeFile={onChangeFile} 
                    />
                    {/* <button onClick={() => console.log(file, index)} className="up">V</button> */}
                </>
            })}
        </div>
            <button onClick={() => addFile()} className="btnadd">הוספת טופס  +</button>

        <div className='filesOp'>
            {listFile?.map((x, index) => {
                return <div className="removeBtn">
                    <File saveFile={saveFile} place={place} defaultValue={x.fileName}
                        // onChangeFile={handleChangeFileOp} 
                        optional setFileName={setFileName} name={x.fileName || `file optionaly ${index + 1}`} />
                    {/* <button onClick={() => console.log(fileOp, index)} className="up">V</button> */}

                    {listFile.length - 1 == index &&
                        <img className="removeImg" onClick={() => removeFile(index)}

                            src={remove} alt={"delete"} />}
                </div>
            })}
        </div>
    </div>
}

export default FixedFiles