import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from '../../../components/common/Select';



function InnerAcc_general({ data }) {


    const [tsa, setTsa] = useState({});
    const [class_, setClass_] = useState("");




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
                            <Select placeholder={"בחר קבוצה"} options={["פעוטות", "תינוקות", "בוגרים"]} onChange={(e) => setClass_(e.target.value)} />
                            <button onClick={() => console.log({ class_ })}>הוספה</button>
                        </div>
                    </div>

                </Tab>
                <Tab eventKey="1" title="תש''א">
                    <div className="subTitle">תש"א כללי</div>
                    <div className="inputs">
                        <Input placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ date: e.target.value })} />
                        <textarea className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>
                        <button onClick={() => console.log({ tsa })} className="btnadd">הפק דו"ח תש"א שנתי</button>

                    </div>
                </Tab>



            </Tabs>

        </div>
    )
}

export default InnerAcc_general