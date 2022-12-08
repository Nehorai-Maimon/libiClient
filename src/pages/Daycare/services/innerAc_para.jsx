import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import File from '../../../components/common/File'
import remove from '../../../images/delete.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function InnerAcc_para({ service, arrfile = [], data }) {
    const [listInput, setListInput] = useState([{ input: "" }]);

    const addInput = () => {
        setListInput([...listInput, { input: "" }])
    }
    const removeInput = (index) => {
        const newList = [...listInput]
        newList.splice(index, 1);
        setListInput(newList);
        // return (
        //     delete fileOp[`file optionaly ${index + 1}`]
        // )
    }
    const [file, setFile] = useState([]);
    const [weekly_summary, setweekly_summary] = useState({ service });
    const [start, setStart] = useState({ service });
    const [middle, setMiddle] = useState({ service });
    const [end, setEnd] = useState({ service });
    const [tsa, setTsa] = useState({ service });
    const [send, setSend] = useState(true);
    const [disable, setDisable] = useState([])

    const onChangeFile = (e) => {
        const name = e.target.name
        const fileSize = (e.target.files[0].size / 1000) + "KB";
        file.push({ service, name: name, file: e.target.files[0].name })

    }


    return (
        <div className="container">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="טפסים">
                    <div className="subTitle">טפסים </div>

                    <div className='files'>
                        {arrfile.map((e, index) => {
                            return (
                                <>
                                    <File placeholder={e.name} name={e.name} onChangeFile={onChangeFile} />
                                    <button onClick={() => console.log(file)} className="up">V</button>

                                </>
                            )
                        })}
                    </div>
                </Tab>
                <Tab eventKey="1" title="סיכום טיפול שבועי ">
                    <div className="subTitle">סיכום טיפול שבועי </div>
                    <div className='title_'>
                        <button disabled={send} onClick={() => { addInput(); setSend(!send) }} className="btnadd">הוספת דו"ח  +</button>
                    </div>

                    <div className='filesOp'>
                        {listInput.map((x, index) => {
                            return (
                                <>
                                    <div className="inputs">
                                        <Input disabled={disable.includes(index)} placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setweekly_summary({ ...weekly_summary, date: e.target.value })} />
                                        <textarea className='textarea_daycare' disabled={disable.includes(index)} placeholder={"מטרות, מהלך טיפול, הערות..."} onChange={(e) => setweekly_summary({ ...weekly_summary, content: e.target.value })} />
                                        <Input disabled={disable.includes(index)} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setweekly_summary({ ...weekly_summary, author: e.target.value })} />

                                        {!disable.includes(index) && <button onClick={() => { console.log({ weekly_summary, index }); setDisable([...disable, index]); setSend(!send) }} className="up">V</button>}
                                    </div>
                                </>
                            )
                        })}
                    </div>



                </Tab>
                <Tab eventKey="2" title="דו''ח תחילת טיפול">
                    <div className="subTitle">דו"ח תחילת טיפול</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setStart({ ...start, date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"דוח תחילת טיפול..."} onChange={(e) => setStart({ ...start, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setStart({ ...start, author: e.target.value })} />

                        <button onClick={() => console.log({ start })} className="btnadd">שמירה</button>

                    </div>
                </Tab>
                <Tab eventKey="3" title="דו''ח אמצע טיפול">
                    <div className="subTitle">דו"ח אמצע טיפול</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setMiddle({ ...middle, date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"דוח אמצע טיפול..."} onChange={(e) => setMiddle({ ...middle, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setMiddle({ ...middle, author: e.target.value })} />

                        <button onClick={() => console.log({ middle })} className="btnadd">שמירה</button>

                    </div>                </Tab>
                <Tab eventKey="4" title="ד''וח סיכום טיפול" >
                    <div className="subTitle">דו"ח סיכום טיפול</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setEnd({ ...end, date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"דוח סיכום טיפול..."} onChange={(e) => setEnd({ ...end, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setEnd({ ...end, author: e.target.value })} />

                        <button onClick={() => console.log({ end })} className="btnadd">שמירה</button>

                    </div>               </Tab>
                <Tab eventKey="5" title="סיכום טיפול קבוצתי">
                    בלה בלה
                </Tab>
                <Tab eventKey="6" title="תש''א">
                    <div className="subTitle">תש"א</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>

                    </div>                </Tab>

            </Tabs>

        </div>
    )
}

export default InnerAcc_para