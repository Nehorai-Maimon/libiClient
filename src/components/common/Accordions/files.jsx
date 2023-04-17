import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup';
import PopupRemove from '../Popup remove';
import BasicFiles from '../Services/basic';
import Club from '../Services/club';
import Daycare from '../../../pages/Daycare/daycare';
import Employment from '../Services/employment';
import General from '../Services/general';
import Housing from '../Services/housing';
import './style.css'


function Accordions({ setData, data, student }) {
    const navigate = useNavigate()
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


    // const removeService = (index, e) => {
    //     const newList = [...arrServices]
    //     newList.splice(index, 1);
    //     setArr(newList);
    //     return (
    //         e === "תעסוקה" ? delete data.employment :
    //             e === "דיור" ? delete data.housing :
    //                 e === "מעון" ? delete data.daycare :
    //                     e === "מועדונית" ? delete data.club : ""
    //     )
    // }

    function saveFile(e, service, name, dir) {
        e.preventDefault()

        console.log(name);
        console.log(service);
        console.log(e.target[0].files[0]);
        console.log(e.target[0].files[0].name);

        const fd = new FormData
        fd.append("files", e.target[0].files[0])
        fd.append("inputName", name)
        fd.append("fileName", e.target[0].files[0].name)

        fetch('http://localhost:4000/student/generalFiles', {
            headers: { studentId: student?._id, place: service, dir },
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { console.log('Success:'); })
            .catch((error) => { console.error('Error:', error); });
    }

    return <div className="accordionContainer">
        <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey={0}>
                <Accordion.Header>טפסים ואישורים</Accordion.Header>
                <Accordion.Body>
                    <Accordion defaultActiveKey={0}>
                        {arrServices?.map((e, index) => {
                            return <Accordion.Item eventKey={index}>
                                <Accordion.Header>{<div className='remove'>{e}  {index > 0 && <PopupRemove student={student} service={e} data={data} index={index} setArr={setArr} arrServices={arrServices} />}</div>}</Accordion.Header>
                                <Accordion.Body>
                                    {e === "כללי" && <General saveFile={saveFile} student={student} setData={setData} data={data} />}
                                    {e === "דיור" && <Housing saveFile={saveFile} setData={setData} data={data} />}
                                    {e === "תעסוקה" && <Employment saveFile={saveFile} setData={setData} data={data} />}
                                    {/* לשאול את מיכל */}
                                    {/* סוכם להוציא את הקבצים מיצירת החניך */}
                                    {/* {e === "מעון" && student ? <button onClick={() => navigate(`/dayCare/${student.id}`)}>ניהול מעון</button> : e === "מעון" && <button onClick={() => navigate('/dayCare')}>ניהול מעון</button>} */}
                                    {e === "מעון" && <button onClick={() => navigate(`/dayCare`)}>ניהול מעון</button>}
                                    {/* {e === "מעון" && <button onClick={() => navigate('/dayCare')}>ניהול מעון</button>} */}
                                    {/* {e === "מעון" && <Daycare student={student} setData={setData} data={data} />} */}
                                    {e === "מועדונית" && <Club saveFile={saveFile} student={student} setData={setData} data={data} />}
                                </Accordion.Body>
                            </Accordion.Item>
                        })}
                    </Accordion>
                    <Popup student={student} setArr={setArr} arrServices={arrServices} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div >
}

export default Accordions;