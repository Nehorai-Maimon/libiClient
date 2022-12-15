import React, { useContext, useState } from 'react'
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

function Daycare() {
    const { user, setUser } = useContext(UserContext);

    const { id } = useParams()

    //בקשה לשרת להביא את האוביקט לפי id
    const dayCare = daycare.find(e => e.student == id)
    console.log(dayCare)

    const [years, setYears] = useState([{ year: 2022 }])
    const [year, setYear] = useState()


    const addYears = (year) => {
        const x = years.find(e => e.year == year)
        if (!x) {
            setYears([...years, { year: Number(year) }])
        }
        console.log(years);
    }

    const currentYear = new Date().getFullYear();

    const [general, setGeneral] = useState("general")
    const [speech, setSpeech] = useState("speech")
    const [occupation, setOccupation] = useState("occupation")
    const [physiotherapy, setPhysiotherapy] = useState("physiotherapy")

    const [teacher, setTeacher] = useState("teacher")
    const [medical, setMedical] = useState("medical")
    const [dietician, setDietician] = useState("dietician")

    const [social, setSocial] = useState("social")





    return (
        <div className="daycare">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="כללי">
                    <DayCare_General service={general} data={dayCare} />
                    <div className='years'>
                        <div className='title'>
                            <div className='subTitle'>:הוספת שנה</div>
                            <Select placeholder={"הוסף שנה..."} options={[currentYear, currentYear + 1]} onChange={(e) => setYear(e.target.value)} />
                            <button onClick={() => addYears(year)}>הוספה</button>
                        </div>
                    </div>
                    <AccordionYears years={years} setYears={setYears} data={dayCare} service={general} />

                </Tab>
                <Tab eventKey="1" title="קלינאות תקשורת">
                    <DayCare_Para years={years} data={dayCare} service={speech} />
                </Tab>
                <Tab eventKey="2" title="ריפוי בעיסוק">
                    <DayCare_Para years={years} data={dayCare} service={occupation} />
                </Tab>
                <Tab eventKey="3" title="פיזיותרפיה">
                    <DayCare_Para years={years} data={dayCare} service={physiotherapy} />

                </Tab>
                <Tab eventKey="4" title="עובדת סוציאלית" disabled={user.userName !== "שלומית"}>
                    <DayCare_Social years={years} data={dayCare} service={social} />
                </Tab>
                <Tab eventKey="5" title="תזונה">
                    <DayCare_Services years={years} data={dayCare} service={dietician} />
                </Tab>
                <Tab eventKey="6" title="גננת">
                    <DayCare_Services years={years} data={dayCare} service={teacher} />
                </Tab>
                <Tab eventKey="7" title="רפואי">
                    <DayCare_Services years={years} data={dayCare} service={medical} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Daycare