import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AccordionYears({ years, children }) {
    return (
        <div className='accordionYears'>
            <Accordion defaultActiveKey={years.length - 1}>
                {years.map((e, index) => {

                    return (
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{<div className='remove'>{e.year}  </div>}</Accordion.Header>

                            <Accordion.Body>
                                {children}
                            </Accordion.Body>
                        </Accordion.Item>


                    )
                })}
            </Accordion>
        </div>
    )
}

export default AccordionYears