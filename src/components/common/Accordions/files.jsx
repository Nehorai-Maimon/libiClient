import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Popup from '../Popup';
import BasicFiles from '../Services/basic';
import Employment from '../Services/employment';
import General from '../Services/general';
import Housing from '../Services/housing';
import './style.css'


function Accordions({ setData, data, student }) {


    const [arrServices, setArr] = useState(["כללי"])

    useEffect(() => {
        if (student) {
            setArr(student.arrServices)
        }
    }, [])

    useEffect(() => {
        const name = "arrServices";
        const value = arrServices
        setData(values => ({ ...values, [name]: value }));
    }, [arrServices])


    return (
        <div className="accordionContainer">
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>טפסים ואישורים</Accordion.Header>
                    <Accordion.Body>

                        <Accordion defaultActiveKey={0}>
                            {arrServices.map((e, index) => {
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>{e}</Accordion.Header>
                                        <Accordion.Body>
                                            {e === "כללי" && <General student={student} setData={setData} data={data} />}
                                            {e === "דיור" && <Housing setData={setData} data={data} />}
                                            {e === "תעסוקה" && <Employment setData={setData} data={data} />}
                                            {e === "מעון יום" && <BasicFiles />}
                                        </Accordion.Body>
                                    </Accordion.Item>

                                )
                            })}
                        </Accordion>

                        <Popup setArr={setArr} arrServices={arrServices} />
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default Accordions;