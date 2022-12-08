import React from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_services from './innerAc_services'

function DayCare_Services({ data, years, service }) {

    let arrfileFixed = []
    let arrfile = []

    return (
        <div>
            <FixedFiles data={data} arrfile={arrfileFixed} service={service} />

            <AccordionYears years={years} children={<InnerAcc_services data={data} arrfile={arrfile} service={service} />} />
        </div>
    )
}

export default DayCare_Services; 