import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from '../../../components/common/Select';
import File from '../../../components/common/File';
import remove from '../../../images/delete.png'



function InnerAcc_services({ service, data, index_ }) {


    let _data;
    if (data) {
        if (service === "dietician") {
            _data = data?.dietician[1]?.years[0]
        }
        else if (service === "medical") {
            _data = data?.medical[1]?.years[0]

        }
        else if (service === "teacher") {
            _data = data?.teacher[1]?.years[0]

        }
    }

    const [tsa, setTsa] = useState({ service });
    const [file, setFile] = useState([]);

    const [listFile, setListFile] = useState(data ? _data[index_].filesOp : []);
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
                    <div className="container_">
                        <div >
                            <button onClick={() => addFile()} className="btnadd">הוספת טופס  +</button>
                        </div>
                        <div className='filesOp'>
                            {listFile.map((x, index) => {
                                return (
                                    <div className="removeBtn">
                                        <File defaultValue={data ? x.fileName : ""} name={data ? x.fileName : ""} onChangeFile={handleChangeFileOp} optional setFileName={setFileName} />
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
                        <Input defaultValue={data ? _data[index_]?.tsa.date : ""} placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, date: e.target.value })} />
                        <textarea defaultValue={data ? _data[index_]?.tsa.content : ""} className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input defaultValue={data ? _data[index_]?.tsa.author : ""} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>

                    </div>
                </Tab>



            </Tabs>

        </div >
    )
}

export default InnerAcc_services