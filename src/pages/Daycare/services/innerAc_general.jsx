import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from '../../../components/common/Select';



function InnerAcc_general({ data, index_ }) {

    const [tsa, setTsa] = useState({});
    const [class_, setClass_] = useState("");

    const _data = data?.general[1].years




    return (
        <div className="container">
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

                            <Select defaultValue={data ? _data[index_][0]?.class : ""} placeholder={"בחר קבוצה"} options={["פעוטות", "תינוקות", "בוגרים"]} onChange={(e) => setClass_(e.target.value)} />
                            <button onClick={() => console.log({ class_ })}>הוספה</button>
                        </div>
                    </div>

                </Tab>
                <Tab eventKey="1" title="תש''א">
                    <div className="subTitle">תש"א כללי</div>
                    <div className="inputs">
                        <Input defaultValue={data ? _data[index_][0]?.tsa.date : ""} placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ date: e.target.value })} />
                        <textarea defaultValue={data ? _data[index_][0]?.tsa.content : ""} className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input defaultValue={data ? _data[index_][0]?.tsa.author : ""} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>
                        <button onClick={() => console.log({ tsa })} className="btnadd">הפק דו"ח תש"א שנתי</button>

                    </div>
                </Tab>



            </Tabs>

        </div>
    )
}

export default InnerAcc_general