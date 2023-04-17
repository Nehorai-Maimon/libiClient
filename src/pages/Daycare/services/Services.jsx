import React from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_services from './innerAc_services'

function DayCare_Services({ saveForm, saveFile, student, data, service }) {

    let arrfileFixed = []
    let arrfile = []

    return (
        <div>
            <FixedFiles data={data} saveFile={saveFile} arrfile={arrfileFixed} service={service} />
            <AccordionYears saveForm={saveForm} saveFile={saveFile} data={data} student={student} service={service} arrfile={arrfile} />
        </div>
    )
}

export default DayCare_Services; 