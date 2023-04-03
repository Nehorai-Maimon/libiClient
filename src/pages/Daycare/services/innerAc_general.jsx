import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from '../../../components/common/Select';

function InnerAcc_general({ v, saveForm, place }) {

    const [tsa, setTsa] = useState({
        author: v.tsa.author,
        date:v.tsa.date,
        content:v.tsa.content
    });
    const [class_, setClass_] = useState("");

    function handleSubmit(){
        const year = v.year
        const team = class_
        const form = {year, tsa, team}
        saveForm(form, place)
    }

    console.log(v);
    return <div className="container">
        <Tabs
            defaultActiveKey="0"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="0" title="מידע כללי">
                <div className='years'>
                    <div className='title'>
                        <div className='subTitle'>:שיוך לקבוצה</div>
                        <Select defaultValue={v ? v.team : ""} placeholder={"בחר קבוצה"} options={["פעוטות", "תינוקות", "בוגרים"]} onChange={(e) => setClass_(e.target.value)} />
                        <button onClick={() => console.log({ class_ })}>הוספה</button>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="1" title="תש''א">
                <div className="subTitle">תש"א כללי</div>
                <div className="inputs">
                    <Input defaultValue={v ? v.tsa.date : ""} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({...tsa, [e.target.name]: e.target.value })} />
                    <textarea defaultValue={v ? v.tsa.content : ""} className='textarea_daycare_1' name="content" placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <Input defaultValue={v ? v.tsa.author : ""} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <button onClick={handleSubmit} type="button" className="btnadd">שמירה</button>
                    <button onClick={() => console.log({ tsa })} className="btnadd">הפק דו"ח תש"א שנתי</button>
                </div>
            </Tab>
        </Tabs>
    </div>
}

export default InnerAcc_general