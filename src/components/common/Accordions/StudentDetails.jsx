import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Input from '../Input';
import Select from '../Select';


function StudentDetails({ data, setData, student }) {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));
    }
    let filterarr = student?.service.filter(e => e != "שיקום" && e != "אוטיזם" && e != 'מש"ה')
    const [service, setService] = useState([])
    const [service1, setService1] = useState(student?.service.includes("אוטיזם"))
    const [service2, setService2] = useState(student?.service.includes("שיקום"))
    const [service3, setService3] = useState(student?.service.includes('מש"ה'))
    const [service4, setService4] = useState(filterarr?.length > 0 ? filterarr[0] : false)

    function save() {
        if (service1) { service.push("אוטיזם") }
        if (service2) { service.push("שיקום") }
        if (service3) { service.push('מש"ה') }
        if (service4) { service.push(service4) }

        const name = "service";
        const value = service
        setData(values => ({ ...values, [name]: value }));
        setService([])
        // איפה המידע נשמר? את מה להעביר הלאה
        // fetch('http://localhost:4000/student/changeDetails', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then(data => console.log('Success:', data))
        //     .catch(error=> console.error('Error:', error));
    }



    const [address, setAddress] = useState({ city: student?.address?.city, address: student?.address?.address, other: student?.address?.other })
    const handleChangeAddress = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddress(values => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        const name = "address";
        const value = address
        setData(values => ({ ...values, [name]: value }));
    }, [address])

    const [days, setDays] = useState({ year: student?.days[student.days.length - 1].year, days: student?.days[student.days.length - 1].days })

    const handleChangeDays = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDays(values => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        const name = "days";
        const value = days
        setData(values => ({ ...values, [name]: value }));
    }, [days])
    const [sensitivity, setSensitivity] = useState({ sensitivity: student?.sensitivity?.sensitivity, more: student?.sensitivity?.more })
    const handleChangeSensitivity = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSensitivity(values => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        const name = "sensitivity";
        const value = sensitivity
        setData(values => ({ ...values, [name]: value }));
    }, [sensitivity])
    const cityOp = ["אדם", "אחיה", "אלון", "אש קודש", "בית אל", "בית אריה – עופרים", "בית חורון", "גבעון החדשה", "גבעת הראל", "גבעת הרואה", "דולב", "חרשה", "חשמונאים", "טלמון", "כוכב השחר", "כוכב יעקב", "כפר אדומים", "כפר האורנים", "כרם רעים", "מבוא חורון", "מגרון", "מעלה לבונה", "מעלה מכמש", "מצפה דני", "מצפה יריחו", "מצפה כרמים", "מתיתיהו", "נוה צוף-חלמיש", "נופי פרת", "נחליאל", "נילי", "נעלה", "נריה", "עדי עד", "עטרת", "עלי", "עלמון – ענתות", "עמיחי", "עפרה", "פסגות", "קידה", "רימונים", "שבות רחל", "שילה", "תל ציון", "אחר"]
    return (
        <div className="accordionContainer">
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>פרטים אישיים של החניך</Accordion.Header>
                    <Accordion.Body>
                        <Input defaultValue={student?.firstName} placeholder={"שם פרטי"} required={true} name={"firstName"} onChange={handleChange} />
                        <Input defaultValue={student?.lastName} placeholder={"שם משפחה"} required={true} name={"lastName"} onChange={handleChange} />
                        <Input defaultValue={student?.id} placeholder={"תעודת זהות"} required={true} name={"id"} type={"number"} onChange={handleChange} />
                        <Select defaultValue={student?.gender} placeholder={"מין"} required={true} options={["זכר", "נקבה"]} name={"gender"} onChange={handleChange} />
                        <Input defaultValue={student?.DateOfBirth} placeholder={"תאריך לידה"} required={true} name={"DateOfBirth"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                        <Select defaultValue={student?.hmo} placeholder={"קופת חולים"} required={false} name={"hmo"} options={["כללית", "לאומית", "מכבי", "מאוחדת"]} onChange={handleChange} />
                        <Select defaultValue={student?.address.city} placeholder={"ישוב"} required={false} name={"city"} options={cityOp} onChange={handleChangeAddress} />
                        {address.city === "אחר" ? <Input defaultValue={student?.address?.other} placeholder={"ישוב..."} required={true} name={"other"} onChange={handleChangeAddress} /> : ""
                        }
                        <Input defaultValue={student?.address?.address} placeholder={" רחוב, מס בית"} required={false} name={"address"} type={"text"} onChange={handleChangeAddress} />
                        <Input defaultValue={student?.diagnosis} placeholder={"אבחנה"} required={false} name={"diagnosis"} type={"text"} onChange={handleChange} />
                        <Select defaultValue={student?.sensitivity?.sensitivity} placeholder={"רגישות רפואית"} required={true} options={["כן", "לא"]} name={"sensitivity"} onChange={handleChangeSensitivity} />
                        {sensitivity?.sensitivity === "כן" || student?.sensitivity?.sensitivity === "כן" ? <Input defaultValue={student?.sensitivity?.more} placeholder={"פירוט..."} required={true} name={"more"} onChange={handleChangeSensitivity} /> : ""
                        }
                        <Input defaultValue={student?.phone} placeholder={"טלפון (רשות)"} required={false} name={"phone"} type={"number"} onChange={handleChange} />
                        <Input defaultValue={student?.email} placeholder={"(רשות) אימייל"} required={false} name={"email"} type={"email"} onChange={handleChange} />
                        <Input defaultValue={student?.days[student.days.length - 1].days} placeholder={"מס' ימי נופשון"} name={"days"} type={"number"} onChange={handleChangeDays} />
                        <Input defaultValue={student?.days[student.days.length - 1].year} placeholder={"לשנת..."} name={"year"} type={"number"} onChange={handleChangeDays} />
                        <span className='titleCheck'>מוכר בשירות:</span>
                        <div className='checkboxcon'>
                            <div className="checkboxstyle"><input type="checkbox" name='אוטיזם' defaultValue={student?.service.includes("אוטיזם")} defaultChecked={student?.service.includes("אוטיזם")} onChange={() => setService1(!service1)} />
                                <span>אוטיזם</span></div>
                            <div className="checkboxstyle"><input type="checkbox" name='שיקום' defaultValue={student?.service.includes("שיקום")} defaultChecked={student?.service.includes("שיקום")} onChange={() => setService2(!service2)} />
                                <span>שיקום</span></div>
                            <div className="checkboxstyle"><input type="checkbox" name='מש"ה' defaultValue={student?.service.includes('מש"ה')} defaultChecked={student?.service.includes('מש"ה')} onChange={() => setService3(!service3)} />
                                <span>מש"ה</span></div>
                            <div className="checkboxstyle"><input type="checkbox" name='אחר' defaultValue={filterarr?.length > 0 ? true : false} defaultChecked={filterarr?.length > 0 ? true : false} onChange={() => setService4(!service4)} />
                                <span>אחר</span></div>
                        </div>
                        {service4 || filterarr?.length > 0 ? <Input defaultValue={filterarr?.length > 0 ? filterarr[0] : ""} placeholder={"...פירוט"} required={true} name={"other"} onChange={(e) => setService4(e.target.value)} /> : ""
                        }

                        <div className='save'>
                            <button onClick={() => save()} className={"styles.btnadd"}>שמירה</button></div>

                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default StudentDetails;