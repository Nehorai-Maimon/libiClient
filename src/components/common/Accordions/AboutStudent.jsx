import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Input from '../Input';
import Select from '../Select';


function AboutStudent({ setData, data, student }) {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));
    }


    return (
        <div className="accordionContainer">
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>על החניך ומשפחתו, מטרות ויעדים</Accordion.Header>
                    <Accordion.Body>
                        <textarea defaultValue={student?.aboutStudent} placeholder={"...נתונים על החניך בשפה חופשית"} name={"aboutStudent"} onChange={handleChange} />
                        <textarea defaultValue={student?.aboutfamily} placeholder={"...נתונים על משפחת החניך בשפה חופשית"} name={"aboutfamily"} onChange={handleChange} />
                        <textarea defaultValue={student?.generalGoals} placeholder={"...יעדי הארגון לחניך"} name={"generalGoals"} onChange={handleChange} />
                        <textarea defaultValue={student?.goalsToYear} placeholder={"...מטרות לשנה הקרובה"} name={"goalsToYear"} onChange={handleChange} />
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default AboutStudent;