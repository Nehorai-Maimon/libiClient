import React, { useEffect, useState } from 'react'
import File from '../../components/common/File'
import remove from '../../images/delete.png'



function FixedFiles({ arrfile = [], data, service }) {

    const [listFile, setListFile] = useState(data ? service === "general" ? data.general[0].fixed[1].filesOp :
        service === "speech" ? data.speech[0].fixed[0].filesOp :
            service === "occupation" ? data.occupation[0].fixed[0].filesOp :
                service === "physiotherapy" ? data.occupation[0].fixed[0].filesOp :
                    service === "dietician" ? data.dietician[0].fixed[0].filesOp :
                        service === "teacher" ? data.teacher[0].fixed[0].filesOp :
                            service === "medical" ? data.medical[0].fixed[0].filesOp :
                                service === "social" ? data.social[0].fixed[1].filesOp :
                                    [] : [])


    const [fileName, setFileName] = useState("")

    const addFile = () => {
        setListFile([...listFile, { file: "" }])
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


    return (
        <div className="container">
            <div className='title'>
                <div className="subTitle">טפסים כלליים</div>
                <div className="addBtn">
                    <button onClick={() => addFile()} className="btnadd">הוספת טופס  +</button>

                </div>
            </div>
            <div className='files'>
                {arrfile.map((e, index) => {
                    return (
                        <>
                            <File defaultValue="" placeholder={e.name} name={e.name} onChangeFile={onChangeFile} />
                            <button onClick={() => console.log(file, index)} className="up">V</button>
                        </>
                    )
                })}
            </div>



            <div className='filesOp'>
                {listFile.map((x, index) => {
                    return (
                        <div className="removeBtn">
                            <File defaultValue={x.fileName} onChangeFile={handleChangeFileOp} optional setFileName={setFileName} name={x.fileName || `file optionaly ${index + 1}`} />
                            <button onClick={() => console.log(fileOp, index)} className="up">V</button>

                            {listFile.length - 1 == index &&
                                <img className="removeImg" onClick={() => removeFile(index)}

                                    src={remove} alt={"delete"} />}
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default FixedFiles