import { useEffect, useState, useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Input from '../Input';
import Select from '../Select';
import './style.css'
import remove from '../../../images/delete.png'



function ContactDetails({ setData, data, listContactEdit }) {

    const [con, setCon] = useState([]);
    const [contact, setContact] = useState([{ contactFirstName: "", contactLastName: "", contactPhone: "", contactEmail: "", relative: "", comment: "" }]);
    const [listContact, setListContact] = useState([{ con: "" },]);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (listContactEdit) {
            setListContact(listContactEdit)
            setContact(listContactEdit)
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
            contact.splice(index, 1)

        )
        // delete data.contact[`contactFirstName${index + 1}`],
        // delete data.contact[`contactLastName${index + 1}`],
        // delete data.contact[`contactPhone${index + 1}`],
        // delete data.contact[`relative${index + 1}`])
    }


    const handleChangeContact = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCon(values => ({ ...values, [name]: value }));
    }
    // const handleChangeContact = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setContact(values => ({ ...values, [name]: value }));
    // }

    function save(index) {
        if (index <= contact.length - 1) {
            if (con.contactFirstName) { contact[index].contactFirstName = con.contactFirstName }
            if (con.contactLastName) { contact[index].contactLastName = con.contactLastName }
            if (con.contactPhone) { contact[index].contactPhone = con.contactPhone }
            if (con.contactEmail) { contact[index].contactEmail = con.contactEmail }
            if (con.relative) { contact[index].relative = con.relative }
            if (con.comment) { contact[index].comment = con.comment }
            contact[index].apotropus = isChecked
        }
        else {
            contact.push({ contactFirstName: con.contactFirstName, contactLastName: con.contactLastName, contactPhone: con.contactPhone, contactEmail: con.contactEmail, relative: con.relative, comment: con.comment, apotropus: isChecked })
        }
        setCon([{ contactFirstName: "", contactLastName: "", contactPhone: "", contactEmail: "", relative: "", comment: "" }])
        setIsChecked(false)
        
        // fetch('http://localhost:4000/student/changeContact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(contact),
        // })
        //     .then((response) => response.json())
        //     .then(data => console.log('Success:', data))
        //     .catch(error=> console.error('Error:', error));
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

                                                <Input defaultValue={listContact[index]?.contactFirstName} placeholder={"שם פרטי"} name={`contactFirstName`} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactLastName} placeholder={"שם משפחה"} name={`contactLastName`} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactPhone} placeholder={"טלפון"} name={`contactPhone`} type={"number"} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactEmail} placeholder={"אימייל"} name={`contactEmail`} type={"email"} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.relative} placeholder={"קירבה לחניך"} name={`relative`} onChange={handleChangeContact} />
                                                {/* <Select defaultValue={listContact[index]?.relative} placeholder={"קירבה לחניך"} options={["אבא", "אמא", "אח", "אחות"]} name={`relative`} onChange={handleChangeContact} /> */}
                                                <Input defaultValue={listContact[index]?.comment} placeholder={"הערות"} name={`comment`} type={"text"} onChange={handleChangeContact} />

                                                <div className="checkboxstyle"><input type="checkbox" defaultValue={listContact[index]?.apotropus} defaultChecked={listContact[index]?.apotropus} onChange={() => setIsChecked(!isChecked)} />
                                                    <span>אפוטרופוס</span></div>

                                                {/* <Input defaultValue={listContact[index]?.contactFirstName} placeholder={"שם פרטי"} name={`contactFirstName${index + 1}`} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactLastName} placeholder={"שם משפחה"} name={`contactLastName${index + 1}`} onChange={handleChangeContact} />
                                                <Input defaultValue={listContact[index]?.contactPhone} placeholder={"טלפון"} name={`contactPhone${index + 1}`} type={"number"} onChange={handleChangeContact} />
                                                <Select defaultValue={listContact[index]?.relative} placeholder={"קירבה לחניך"} options={["אבא", "אמא", "אח", "אחות"]} name={`relative${index + 1}`} onChange={handleChangeContact} /> */}
                                            </>
                                            <div className='save' >


                                                {listContact.length - 1 == index && index > 0 &&
                                                    <>
                                                        <img className="removeBtn" onClick={() => removeContact(index)}
                                                            //  <img className="removeBtn" onClick={listContactEdit ? removeContactEdit(index) : () => removeContact(index)}

                                                            src={remove} alt={"delete"} />


                                                    </>}
                                                <button type='button' onClick={() => save(index)} className={"styles.btnadd"}>שמירה</button>



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