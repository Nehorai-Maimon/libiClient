import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Input from '../Input';
import Select from '../Select';
import './style.css'
import remove from '../../../images/delete.png'


//TO DO: מחיקת אנשי קשר בעריכה!

function ContactDetails({ setData, data, listContactEdit, removeContactEdit, setListContactEdit }) {

    const [contact, setContact] = useState({});
    const [listContact, setListContact] = useState([{ con: "" },]);

    useEffect(() => {
        if (listContactEdit) {
            setListContact(listContactEdit)
        }
    }, [listContactEdit])


    const addContact = () => {
        setListContact([...listContact, { con: "" }])
    }
    const removeContact = (index) => {
        const newList = [...listContact]
        newList.splice(index, 1);
        setListContact(newList);
        return (
            delete data.contact[`contactFirstName${index + 1}`],
            delete data.contact[`contactLastName${index + 1}`],
            delete data.contact[`contactPhone${index + 1}`],
            delete data.contact[`relative${index + 1}`])
    }


    const handleChangeContact = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact(values => ({ ...values, [name]: value }));
    }


    useEffect(() => {
        const name = "contact"
        const value = contact
        setData(values => ({ ...values, [name]: value }));
    }, [contact])




    return (
        <div className="accordionContainer">
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>אנשי קשר</Accordion.Header>
                    <Accordion.Body>

                        <Accordion defaultActiveKey={0}>
                            {listContact.map((x, index) => {
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>איש קשר מספר {index + 1}</Accordion.Header>
                                        <Accordion.Body>
                                            <>
                                                <Input defaultValue={listContact[index]?.contactFirstName} placeholder={"שם פרטי"} required={true} name={`contactFirstName${index + 1}`} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactLastName} placeholder={"שם משפחה"} required={true} name={`contactLastName${index + 1}`} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactPhone} placeholder={"טלפון"} required={true} name={`contactPhone${index + 1}`} type={"number"} onChange={handleChangeContact} />
                                                <Select defaultValue={listContact[index]?.relative} placeholder={"קירבה לחניך"} required={true} options={["אבא", "אמא", "אח", "אחות"]} name={`relative${index + 1}`} onChange={handleChangeContact} />

                                            </>
                                            <div >


                                                {listContact.length - 1 == index && index > 0 &&
                                                    <img className="removeBtn" onClick={() => removeContact(index)}
                                                        // <img className="removeBtn" onClick={listContactEdit ? removeContactEdit(index) : () => removeContact(index)}

                                                        src={remove} alt={"delete"} />}
                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}


                        </Accordion>

                        <button onClick={() => addContact()} className="btnadd">איש קשר נוסף  +</button>

                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default ContactDetails;