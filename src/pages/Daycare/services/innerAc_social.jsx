import React, { useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function InnerAcc_Social({ data }) {

    const [tsa, setTsa] = useState({});
    const [goals, setGoals] = useState({});
    const [weekly_summary, setweekly_summary] = useState({});


    const [send, setSend] = useState(true);
    const [disable, setDisable] = useState([])

    const [listInput, setListInput] = useState([{ input: "" }]);

    const addInput = () => {
        setListInput([...listInput, { input: "" }])
    }

    return (
        <div className="container">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="סיכומים שוטפים">
                    <div className="subTitle">סיכום עבודה שוטף </div>
                    <div className='title_'>
                        <button disabled={send} onClick={() => { addInput(); setSend(!send) }} className="btnadd">הוספת דו"ח  +</button>
                    </div>

                    <div className='filesOp'>
                        {listInput.map((x, index) => {
                            return (
                                <>
                                    <div className="inputs">
                                        <Input disabled={disable.includes(index)} placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setweekly_summary({ date: e.target.value })} />
                                        <textarea className='textarea_daycare' disabled={disable.includes(index)} placeholder={"סיכום עבודה שוטף..."} onChange={(e) => setweekly_summary({ ...weekly_summary, content: e.target.value })} />
                                        <Input disabled={disable.includes(index)} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setweekly_summary({ ...weekly_summary, author: e.target.value })} />

                                        {!disable.includes(index) && <button onClick={() => { console.log({ weekly_summary, index }); setDisable([...disable, index]); setSend(!send) }} className="up">V</button>}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </Tab>
                <Tab eventKey="1" title="מטרות">
                    <div className="subTitle">מטרות</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setGoals({ date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"דוח תחילת טיפול..."} onChange={(e) => setGoals({ ...goals, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setGoals({ ...goals, author: e.target.value })} />

                        <button onClick={() => console.log({ goals })} className="btnadd">שמירה</button>

                    </div>
                </Tab>
                <Tab eventKey="2" title="תש''א">
                    <div className="subTitle">תש"א </div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>

                    </div>
                </Tab>



            </Tabs>

        </div>
    )
}

export default InnerAcc_Social