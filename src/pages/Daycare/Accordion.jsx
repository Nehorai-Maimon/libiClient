import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import InnerAcc_general from './services/innerAc_general';
import InnerAcc_para from './services/innerAc_para';
import InnerAcc_services from './services/innerAc_services';
import InnerAcc_Social from './services/innerAc_social';

function AccordionYears({ student,setStudent, saveFile, service, data, arrfile, saveForm }) {

    if (!student) {
        return <div>loading...</div>
    }

    return <div className='accordionYears'>
        {/* <Accordion defaultActiveKey={student.daycare.general.year[student.daycare.general.year.length - 1]}> */}
        <Accordion >
            {student.daycare.general.year.map((v, index) => {
                return <Accordion.Item eventKey={index}>
                    <Accordion.Header>{<div className='remove'>{v.year}</div>}</Accordion.Header>
                    <Accordion.Body>
                        {/* {children} */}
                        {service === "general" && <InnerAcc_general v={v} setStudent={setStudent} student={student} service={service} saveForm={saveForm} />}
                        {service === "speech" && <InnerAcc_para v={v} saveForm={saveForm} saveFile={saveFile} data={data} service={service} arrfile={arrfile} index_={index} />}
                        {service === "occupation" && <InnerAcc_para v={v} saveForm={saveForm} saveFile={saveFile} data={data} service={service} arrfile={arrfile} index_={index} />}
                        {service === "physiotherapy" && <InnerAcc_para v={v} saveForm={saveForm} saveFile={saveFile} data={data} service={service} arrfile={arrfile} index_={index} />}
                        {service === "dietician" && <InnerAcc_services v={v} saveForm={saveForm} saveFile={saveFile} data={data} arrfile={arrfile} service={service} index_={index} />}
                        {service === "teacher" && <InnerAcc_services v={v} saveForm={saveForm} saveFile={saveFile} data={data} arrfile={arrfile} service={service} index_={index} />}
                        {service === "medical" && <InnerAcc_services v={v} saveForm={saveForm} saveFile={saveFile} data={data} arrfile={arrfile} service={service} index_={index} />}
                        {service === "social" && <InnerAcc_Social v={v} saveForm={saveForm} data={data} arrfile={arrfile} service={service} index_={index} />}
                    </Accordion.Body>
                </Accordion.Item>
            })}
        </Accordion>
    </div>
}

export default AccordionYears