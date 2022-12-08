import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from '../../../components/common/Select';
import File from '../../../components/common/File';
import remove from '../../../images/delete.png'



function InnerAcc_services({ service, data }) {


    const [tsa, setTsa] = useState({ service });
    const [file, setFile] = useState([]);

    const [listFile, setListFile] = useState([]);
    const [fileName, setFileName] = useState("")

    const addFile = () => {
        setListFile([...listFile, { file: "" }])
    }
    const removeFile = (index) => {
        const newList = [...listFile]
        newList.splice(index, 1);
        setListFile(newList);
        // return (
        //     delete fileOp[`file optionaly ${index + 1}`]
        // )
    }

    const handleChangeFileOp = (e) => {

        file.push({ service, name: fileName, file: e.target.files[0].name })

        setFileName("")
    }



    return (
        <div className="container">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="מידע כללי">
                    <div className='filesOp'>
                        <button onClick={() => addFile()} className="btnadd">הוספת טופס  +</button>

                        <div className='filesOp'>
                            {listFile.map((x, index) => {
                                return (
                                    <div className="removeBtn">
                                        <File onChangeFile={handleChangeFileOp} optional setFileName={setFileName} name={`file optionaly ${index + 1}`} />
                                        <button onClick={() => console.log(file, index)} className="up">V</button>

                                        {listFile.length - 1 == index &&
                                            <img className="removeImg" onClick={() => removeFile(index)}

                                                src={remove} alt={"delete"} />}
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="1" title="תש''א">
                    <div className="subTitle">תש"א כללי</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>

                    </div>
                </Tab>



            </Tabs>

        </div>
    )
}

export default InnerAcc_services