import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import InnerAcc_general from './services/innerAc_general';
import InnerAcc_para from './services/innerAc_para';
import InnerAcc_services from './services/innerAc_services';
import InnerAcc_Social from './services/innerAc_social';

function AccordionYears({ student, place, saveFile, service, data, arrfile, saveForm }) {

    if (!student) {
        return <div>loading...</div>
    }

    return <div className='accordionYears'>
        <Accordion defaultActiveKey={student.daycare.general.year[student.daycare.general.year.length - 1]}>
            {student.daycare.general.year.map((v, index) => {
                return <Accordion.Item eventKey={index}>
                    <Accordion.Header>{<div className='remove'>{v.year}</div>}</Accordion.Header>
                    <Accordion.Body>
                        {/* {children} */}
                        {service === "general" && <InnerAcc_general v={v} place="general" saveForm={saveForm} />}
                        {service === "speech" && <InnerAcc_para v={v} saveForm={saveForm} data={data} place={place} saveFile={saveFile} service={service} arrfile={arrfile} index_={index} />}
                        {service === "occupation" && <InnerAcc_para data={data} service={service} arrfile={arrfile} index_={index} />}
                        {service === "physiotherapy" && <InnerAcc_para data={data} service={service} arrfile={arrfile} index_={index} />}
                        {service === "dietician" && <InnerAcc_services data={data} arrfile={arrfile} service={service} index_={index} />}
                        {service === "medical" && <InnerAcc_services data={data} arrfile={arrfile} service={service} index_={index} />}
                        {service === "teacher" && <InnerAcc_services data={data} arrfile={arrfile} service={service} index_={index} />}
                        {service === "social" && <InnerAcc_Social data={data} arrfile={arrfile} service={service} index_={index} />}
                    </Accordion.Body>
                </Accordion.Item>
            })}
        </Accordion>
    </div>
}

export default AccordionYears