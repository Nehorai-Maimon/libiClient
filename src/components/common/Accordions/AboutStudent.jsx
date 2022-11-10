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
                        <textarea defaultValue={student?.textA} placeholder={"...נתונים על החניך בשפה חופשית"} name={"text a"} onChange={handleChange} />
                        <textarea defaultValue={student?.textB} placeholder={"...נתונים על משפחת החניך בשפה חופשית"} name={"text b"} onChange={handleChange} />
                        <textarea defaultValue={student?.textC} placeholder={"...יעדי הארגון לחניך"} name={"text c"} onChange={handleChange} />
                        <textarea defaultValue={student?.textD} placeholder={"...מטרות לשנה הקרובה"} name={"text d"} onChange={handleChange} />
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default AboutStudent;