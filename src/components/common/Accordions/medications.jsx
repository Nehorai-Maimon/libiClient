import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Input from '../Input';
import Select from '../Select';
import remove from '../../../images/delete.png'


function Medications({ setData, data, listMedicationEdit }) {
    const [medication, setMedication] = useState({});
    const [listMedication, setListMedication] = useState([{ med: "" },]);

    useEffect(() => {
        if (listMedicationEdit) {
            setListMedication(listMedicationEdit)
        }
    }, [])

    const addMedication = () => {
        setListMedication([...listMedication, { med: "" }])
    }

    const removeMedication = (index) => {
        const newList = [...listMedication]
        newList.splice(index, 1);
        setListMedication(newList);
        return (
            delete data.medication[`medication${index + 1}`],
            delete data.medication[`medicationTime${index + 1}`])
    }

    const handleChangeMedication = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMedication(values => ({ ...values, [name]: value }));
    }



    useEffect(() => {
        const name = "medication"
        const value = medication
        setData(values => ({ ...values, [name]: value }));
    }, [medication])




    return (
        <div className="accordionContainer">
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>טיפול תרופתי</Accordion.Header>
                    <Accordion.Body>

                        <Accordion defaultActiveKey={0}>
                            {listMedication.map((x, index) => {
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>תרופה מספר {index + 1}</Accordion.Header>
                                        <Accordion.Body>
                                            <>
                                                <Input defaultValue={listMedication[index]?.name} placeholder={"שם התרופה"} required={true} name={`medication${index + 1}`} onChange={handleChangeMedication} />
                                                <Input defaultValue={listMedication[index]?.time} placeholder={"שעת נטילה"} required={true} name={`medicationTime${index + 1}`}
                                                    onFocus={(e) => (e.target.type = "time")}
                                                    onBlur={(e) => (e.target.type = "text")} onChange={handleChangeMedication} />
                                                <div>
                                                    {listMedication.length - 1 == index && index > 0 &&
                                                        <img className="removeBtn" onClick={() => removeMedication(index)}

                                                            src={remove} alt={"delete"} />}
                                                </div>

                                            </>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}


                        </Accordion>

                        <button onClick={() => addMedication()} className="btnadd">תרופה נוספת +</button>


                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default Medications;