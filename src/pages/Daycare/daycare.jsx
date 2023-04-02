import React, { useContext, useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
import AccordionYears from './Accordion';
import Select from '../../components/common/Select';
import DayCare_General from './services/general';
import DayCare_Para from './services/Para';
import InnerAcc_general from './services/innerAc_general';
import DayCare_Services from './services/Services';
import UserContext from '../../context/UserContext';
import DayCare_Social from './services/social';
import { useParams } from 'react-router-dom';
import { daycare } from '../../fakeData';
import StudentContext from '../../context/StudentContext';

function Daycare() {
    const { student, setStudent } = useContext(StudentContext)
    const { user, setUser } = useContext(UserContext);

    // const { id } = useParams()

    //בקשה לשרת להביא את האוביקט לפי id
    // const dayCare = daycare.find(e => e.student == id)
    // console.log(dayCare)
    
    // לשאול את מיכל מה זה
    const [years, setYears] = useState([{ year: 2022 }])
    const [year, setYear] = useState()
    
    useEffect(() => { console.log("year", year); }, [year])
    
    const currentYear = new Date().getFullYear();

    const [general, setGeneral] = useState("general")
    const [speech, setSpeech] = useState("speech")
    const [occupation, setOccupation] = useState("occupation")
    const [physiotherapy, setPhysiotherapy] = useState("physiotherapy")
    const [teacher, setTeacher] = useState("teacher")
    const [medical, setMedical] = useState("medical")
    const [dietician, setDietician] = useState("dietician")
    const [social, setSocial] = useState("social")
    

    function saveForm(tsa, team, year, place) {

        // console.log("tsa", tsa);
        // console.log("team", team);
        // console.log("year", year);
        
        const form = { year, team, tsa }
        // console.log(form);

        fetch('http://localhost:4000/student/updateDaycare', {
            headers: {
                studentId: student?._id, place,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then((response) => response.json())
            .then((result) => { console.log(result) })
            .catch((error) => { console.error('Error:', error); });
    }

    function saveFile(e, place, name, dir) {
        e.preventDefault()

        console.log(name);
        console.log(place);
        console.log(dir);
        console.log(currentYear);
        
        // console.log(e.target[0].files[0]);
        // console.log(e.target[0].files[0].name);

        const fd = new FormData
        fd.append("files", e.target[0].files[0])
        fd.append("inputName", name)
        fd.append("fileName", e.target[0].files[0].name)

        fetch('http://localhost:4000/student/generalFiles', {
            headers: { studentId: student?._id, place, dir,currentYear, daycare: true },
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { console.log('Success:'); })
            .catch((error) => { console.error('Error:', error); });
    }

    const addYears = () => {

        const fakeYear = {
            year: year,
            team: "",
            tsa: {
                date: "",
                content: "",
                outhor: ""
            },
            speech: {
                files: [],
                filesOp: [],
                weeklySummary: [{
                    date: "",
                    summary: "",
                    author: ""
                }],
                start: {
                    date: "",
                    summary: "",
                    author: ""
                },
                middle: {
                    date: "",
                    summary: "",
                    author: ""
                },
                end: {
                    date: "",
                    summary: "",
                    author: ""
                },
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            },
            occupation: {
                files: [],
                filesOp: [],
                weeklySummary: [{
                    date: "",
                    summary: "",
                    author: ""
                }],
                start: {
                    date: "",
                    summary: "",
                    author: ""
                },
                middle: {
                    date: "",
                    summary: "",
                    author: ""
                },
                end: {
                    date: "",
                    summary: "",
                    author: ""
                },
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            },
            physiotherapy: {
                files: [],
                filesOp: [],
                weeklySummary: [{
                    date: "",
                    summary: "",
                    author: ""
                }],
                start: {
                    date: "",
                    summary: "",
                    author: ""
                },
                middle: {
                    date: "",
                    summary: "",
                    author: ""
                },
                end: {
                    date: "",
                    summary: "",
                    author: ""
                },
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            },
            social: {
                files: [],
                filesOp: [],
                weeklySummary: [{
                    date: "",
                    summary: "",
                    author: ""
                }],
                goals: {
                    date: "",
                    summary: "",
                    author: ""
                },
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            },
            dietician: {
                files: [],
                filesOp: [],
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            },
            teacher: {
                files: [],
                filesOp: [],
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            },
            medical: {
                files: [],
                filesOp: [],
                tsa: {
                    date: "",
                    summary: "",
                    author: ""
                }
            }
        }
        
        const exsistYear = student.daycare.general.year.filter(line => line.year === year)

        if (!exsistYear.length) {
            const prev = { ...student }
            prev.daycare.general.year.push(fakeYear)
            setStudent(prev)
        }
    }

    useEffect(() => { console.log("student", student); }, [student])

    if (!student) {
        return <div>loading...</div>
    }

    return (
        <div className="daycare">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="כללי">
                    <DayCare_General saveFile={saveFile} service={general} student={student} />
                    <div className='years'>
                        <div className='title'>
                            <div className='subTitle'>:הוספת שנה</div>
                            <Select placeholder={"...הוסף שנה"} options={[currentYear, currentYear + 1]} onChange={(e) => setYear(e.target.value)} />
                            <button onClick={addYears}>הוספה</button>
                        </div>
                    </div>
                    <AccordionYears saveForm={saveForm} student={student} service={general} />
                </Tab>
                <Tab eventKey="1" title="קלינאות תקשורת">
                    {/* <DayCare_Para years={years} data={dayCare} service={speech} /> */}
                    <DayCare_Para saveForm={saveForm} place="speech" saveFile={saveFile} years={years} student={student} service={speech} />
                </Tab>
                <Tab eventKey="2" title="ריפוי בעיסוק">
                    {/* <DayCare_Para years={years} data={dayCare} service={occupation} /> */}
                    <DayCare_Para place="occupation" years={years} student={student} service={occupation} />
                </Tab>
                <Tab eventKey="3" title="פיזיותרפיה">
                    {/* <DayCare_Para years={years} data={dayCare} service={physiotherapy} /> */}
                    <DayCare_Para place="physiotherapy" years={years} student={student} service={physiotherapy} />
                </Tab>
                <Tab eventKey="4" title="עובדת סוציאלית" disabled={user.userName !== "שלומית"}>
                    {/* <DayCare_Social years={years} data={dayCare} service={social} /> */}
                    <DayCare_Social years={years} student={student} service={social} />
                </Tab>
                <Tab eventKey="5" title="תזונה">
                    {/* <DayCare_Services years={years} data={dayCare} service={dietician} /> */}
                    <DayCare_Services years={years} student={student} service={dietician} />
                </Tab>
                <Tab eventKey="6" title="גננת">
                    {/* <DayCare_Services years={years} data={dayCare} service={teacher} /> */}
                    <DayCare_Services years={years} student={student} service={teacher} />
                </Tab>
                <Tab eventKey="7" title="רפואי">
                    {/* <DayCare_Services years={years} data={dayCare} service={medical} /> */}
                    <DayCare_Services years={years} student={student} service={medical} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Daycare