import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import File from '../../../components/common/File'
import remove from '../../../images/delete.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function InnerAcc_para({ saveForm, v, saveFile, service, arrfile = [], data, index_ }) {
    let _data;
    const mapYear = v?.year
    if (data) {
        if (service === "speech") {
            _data = data?.speech[1]?.years[0]
            console.log(_data[index_].weekly_summary);
        }
        else if (service === "occupation") {
            _data = data?.occupation[1]?.years[0]
        }
        else if (service === "physiotherapy") {
            _data = data?.physiotherapy[1]?.years[0]
        }

        arrfile = _data[index_].files
    }
    // console.log(_data[index_]?.start.date)
    // console.log(_data)
    const [listInput, setListInput] = useState(v?.speech.weeklySummary ? v.speech.weeklySummary : [{ input: "" }]);

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
    const [weekly_summary, setweekly_summary] = useState({ tab: "weeklySummary", year: mapYear });
    const [start, setStart] = useState({ tab: "start", year: mapYear });
    const [middle, setMiddle] = useState({ tab: "middle", year: mapYear });
    const [end, setEnd] = useState({ tab: "end", year: mapYear });
    const [tsa, setTsa] = useState({ tab: "tsa", year: mapYear });
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

    const [disable, setDisable] = useState(v?.speech.weeklySummary ? able : [])

    const onChangeFile = (e) => {
        const name = e.target.name
        const fileSize = (e.target.files[0].size / 1000) + "KB";
        file.push({ service, name: name, file: e.target.files[0].name })

    }

    if (!v) {
        // console.log("v.speech", v.speech);
        return <div>loading...</div>
    }
    //  else {
    // }

    return <div className="container">
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
                        return <>
                            <File year={v?.year} service={service} saveFile={saveFile} placeholder={data ? e.fileName : e.name} name={data ? e.fileName : e.name} onChangeFile={onChangeFile} />
                        </>
                    })}
                </div>
            </Tab>
            <Tab eventKey="1" title="סיכום טיפול שבועי ">
                <div className="subTitle">סיכום טיפול שבועי </div>
                <div className='title_'>
                    <button disabled={send} onClick={() => { addInput(); setSend(!send) }} className="btnadd">הוספת דו"ח  +</button>
                </div>

                <div className='filesOp'>
                    {listInput.map((v, index) => {
                        return <div className="inputs" >
                            <Input defaultValue={v?.date} disabled={disable.includes(index)} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")} onChange={(e) => setweekly_summary({ ...weekly_summary, date: e.target.value })} />
                            <textarea defaultValue={v?.summary} className='textarea_daycare' disabled={disable.includes(index)} placeholder={"מטרות, מהלך טיפול, הערות..."} onChange={(e) => setweekly_summary({ ...weekly_summary, summary: e.target.value })} />
                            <Input defaultValue={v?.author} disabled={disable.includes(index)} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setweekly_summary({ ...weekly_summary, author: e.target.value })} />
                            {/* לשאול את מיכל איך להפוך את הכפתור למושבת */}
                            {!disable.includes(index) && <button onClick={() => { saveForm(weekly_summary, service); setDisable([...disable, index]); setSend(!send) }} className="btnadd">שמירה</button>}
                        </div>
                    })}
                </div>
            </Tab>
            <Tab eventKey="2" title="דו''ח תחילת טיפול">
                <div className="subTitle">דו"ח תחילת טיפול</div>
                <div className="inputs">
                    <Input defaultValue={v?.speech.start?.date} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setStart({ ...start, [e.target.name]: e.target.value })} />
                    <textarea defaultValue={v?.speech.start?.summary} className='textarea_daycare_1' placeholder={"דוח תחילת טיפול..."} name="summary" onChange={(e) => setStart({ ...start, [e.target.name]: e.target.value })} />
                    <Input defaultValue={v?.speech.start?.author} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setStart({ ...start, [e.target.name]: e.target.value })} />

                    <button onClick={() => saveForm(start, service)} className="btnadd">שמירה</button>
                </div>
            </Tab>
            <Tab eventKey="3" title="דו''ח אמצע טיפול">
                <div className="subTitle">דו"ח אמצע טיפול</div>
                <div className="inputs">
                    <Input defaultValue={v?.speech.middle?.date} placeholder={"תאריך "} required={true} name={"date"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setMiddle({ ...middle, [e.target.name]: e.target.value })} />
                    <textarea defaultValue={v?.speech.middle?.summary} className='textarea_daycare_1' placeholder={"דוח אמצע טיפול..."} name="summary" onChange={(e) => setMiddle({ ...middle, [e.target.name]: e.target.value })} />
                    <Input defaultValue={v?.speech.middle?.author} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setMiddle({ ...middle, [e.target.name]: e.target.value })} />

                    <button onClick={() => saveForm(middle, service)} className="btnadd">שמירה</button>
                </div>
            </Tab>
            <Tab eventKey="4" title="ד''וח סיכום טיפול" >
                <div className="subTitle">דו"ח סיכום טיפול</div>
                <div className="inputs">
                    <Input defaultValue={data ? _data[index_]?.end.date : ""} placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setEnd({ ...end, date: e.target.value })} />
                    <textarea defaultValue={data ? _data[index_]?.end.content : ""} className='textarea_daycare_1' placeholder={"דוח סיכום טיפול..."} onChange={(e) => setEnd({ ...end, content: e.target.value })} />
                    <Input defaultValue={data ? _data[index_]?.end.author : ""} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setEnd({ ...end, author: e.target.value })} />

                    <button onClick={() => console.log({ end })} className="btnadd">שמירה</button>

                </div>               </Tab>
            <Tab eventKey="5" title="סיכום טיפול קבוצתי">
                בלה בלה
            </Tab>
            <Tab eventKey="6" title="תש''א">
                <div className="subTitle">תש"א</div>
                <div className="inputs">
                    <Input defaultValue={data ? _data[index_]?.tsa.date : ""} placeholder={"תאריך "} required={true} name={"תאריך"} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, date: e.target.value })} />
                    <textarea defaultValue={data ? _data[index_]?.tsa.content : ""} className='textarea_daycare_1' placeholder={"  תש''א..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                    <Input defaultValue={data ? _data[index_]?.tsa.author : ""} placeholder={"שם הכותב/ת"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                    <button onClick={() => console.log({ tsa })} className="btnadd">שמירה</button>
                </div>
            </Tab>
        </Tabs>
    </div>
}

export default InnerAcc_para