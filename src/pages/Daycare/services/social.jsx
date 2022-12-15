import React, { useState } from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_Social from './innerAc_social'

function DayCare_Social({ data, years, service }) {

    let arrfileFixed = [{ name: "אינטייק סוציאלי" }]
    let arrfile = []

    return (
        <div>
            <FixedFiles data={data} arrfile={arrfileFixed} service={service} />
            <AccordionYears years={years} data={data} arrfile={arrfile} service={service} />
        </div>
    )
}

export default DayCare_Social