import React, { useState } from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_para from './innerAc_para'

function DayCare_Para({ data, years, service }) {

    let arrfileFixed = []
    let arrfile = [{ name: "טבלת GAS" }, { name: "טופס קידוד" }]

    return (
        <div>
            <FixedFiles data={data} arrfile={arrfileFixed} service={service} />

            <AccordionYears years={years} data={data} service={service} arrfile={arrfile} />

        </div>
    )
}

export default DayCare_Para