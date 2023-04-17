import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function InnerAcc_Social({ saveForm, v, data, index_, service }) {

    const mapYear = v?.year
    let _data;
    // if (data) {
    //     _data = data?.social[1]?.years[0]
    //     console.log(_data);
    // }

    const [listInput, setListInput] = useState(v?.social.weeklySummary ? v.social.weeklySummary : [{ input: "" }]);

    const [tsa, setTsa] = useState({ tab: "tsa", year: mapYear });
    const [goals, setGoals] = useState({ tab: "goals", year: mapYear });
    const [weekly_summary, setweekly_summary] = useState({ tab: "weeklySummary", year: mapYear });
    const [send, setSend] = useState(true);

    let able = []
    if (data) {
        listInput.map((e, index) => able.push(index))
    }

    useEffect(() => {
        if (able.length > 0) {
            setSend(!send)
        }
    }, [])

    const [disable, setDisable] = useState(data ? able : [])

    const addInput = () => {
        setListInput([...listInput, { input: "" }])
    }

    return <div className="container">
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
                    {listInput.map((v, index) => {
                        // לשאול את מיכל איך לעשות אותם מושתקים
                        return <div className="inputs">
                            <Input defaultValue={v.date} disabled={disable.includes(index)} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")} onChange={(e) => setweekly_summary({ ...weekly_summary, [e.target.name]: e.target.value })} />
                            <textarea defaultValue={v.summary} className='textarea_daycare' disabled={disable.includes(index)} placeholder={"סיכום עבודה שוטף..."} name='summary' onChange={(e) => setweekly_summary({ ...weekly_summary, [e.target.name]: e.target.value })} />
                            <Input defaultValue={v.author} disabled={disable.includes(index)} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setweekly_summary({ ...weekly_summary, [e.target.name]: e.target.value })} />

                            {!disable.includes(index) && <button onClick={() => { saveForm(weekly_summary, service); setDisable([...disable, index]); setSend(!send) }} className="btnadd" >שמירה</button>}
                        </div>
                    })}
                </div>
            </Tab>
            <Tab eventKey="1" title="מטרות">
                <div className="subTitle">מטרות</div>
                <div className="inputs">
                    <Input defaultValue={v?.social.goals?.date} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setGoals({ ...goals, [e.target.name]: e.target.value })} />
                    <textarea defaultValue={v?.social.goals?.summary} className='textarea_daycare_1' placeholder={"דוח תחילת טיפול..."} name='summary' onChange={(e) => setGoals({ ...goals, [e.target.name]: e.target.value })} />
                    <Input defaultValue={v?.social.goals?.author} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setGoals({ ...goals, [e.target.name]: e.target.value })} />

                    <button onClick={() => saveForm(goals, service)} className="btnadd">שמירה</button>

                </div>
            </Tab>
            <Tab eventKey="2" title="תש''א">
                <div className="subTitle">תש"א </div>
                <div className="inputs">
                    <Input defaultValue={v?.social.tsa?.date} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <textarea defaultValue={v?.social.tsa?.summary} className='textarea_daycare_1' placeholder={"  תש''א..."} name='summary' onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />
                    <Input defaultValue={v?.social.tsa?.author} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, [e.target.name]: e.target.value })} />

                    <button onClick={() => saveForm(tsa, service)} className="btnadd">שמירה</button>

                </div>
            </Tab>
        </Tabs>
    </div>
}

export default InnerAcc_Social