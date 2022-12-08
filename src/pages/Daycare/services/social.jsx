import React, { useState } from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_Social from './innerAc_social'

function DayCare_Social({ data, years }) {
    const [social, setSocial] = useState("social")

    let arrfileFixed = [{ name: "אינטייק סוציאלי" }]
    let arrfile = []

    return (
        <div>
            <FixedFiles data={data} arrfile={arrfileFixed} service={social} />
            <AccordionYears years={years} children={<InnerAcc_Social data={data} arrfile={arrfile} service={social} />} />
        </div>
    )
}

export default DayCare_Social