import React, { useState } from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_Social from './innerAc_social'

function DayCare_Social({ student, saveForm, saveFile, data, service }) {

    let arrfileFixed = [{ name: "אינטייק סוציאלי" }]
    let arrfile = []

    return <div>
        <FixedFiles saveFile={saveFile} data={data} arrfile={arrfileFixed} service={service} />
        <AccordionYears student={student} saveForm={saveForm} data={data} arrfile={arrfile} service={service} />
    </div>
}

export default DayCare_Social