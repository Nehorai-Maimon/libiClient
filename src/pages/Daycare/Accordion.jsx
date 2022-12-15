import React, { useEffect } from 'react'
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import InnerAcc_general from './services/innerAc_general';
import InnerAcc_para from './services/innerAc_para';
import InnerAcc_services from './services/innerAc_services';
import InnerAcc_Social from './services/innerAc_social';

function AccordionYears({ years, service, data, arrfile }) {
    const [year, setYear] = useState([])
    useEffect(() => {
        if (data) {
            setYear(data?.general[1].years)
        }
        else { setYear(years) }
    }, [years])

    return (
        <div className='accordionYears'>
            <Accordion defaultActiveKey={years.length - 1}>
                {year.map((e, index) => {

                    return (
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{<div className='remove'>{data ? e[0].year : e.year}  </div>}</Accordion.Header>

                            <Accordion.Body>
                                {/* {children} */}
                                {service === "general" && <InnerAcc_general data={data} index_={index} />}
                                {service === "speech" && <InnerAcc_para data={data} service={service} arrfile={arrfile} index_={index} />}
                                {service === "occupation" && <InnerAcc_para data={data} service={service} arrfile={arrfile} index_={index} />}
                                {service === "physiotherapy" && <InnerAcc_para data={data} service={service} arrfile={arrfile} index_={index} />}
                                {service === "dietician" && <InnerAcc_services data={data} arrfile={arrfile} service={service} index_={index} />}
                                {service === "medical" && <InnerAcc_services data={data} arrfile={arrfile} service={service} index_={index} />}
                                {service === "teacher" && <InnerAcc_services data={data} arrfile={arrfile} service={service} index_={index} />}
                                {service === "social" && <InnerAcc_Social data={data} arrfile={arrfile} service={service} index_={index} />}
                            </Accordion.Body>
                        </Accordion.Item>


                    )
                })}
            </Accordion>
        </div>
    )
}

export default AccordionYears