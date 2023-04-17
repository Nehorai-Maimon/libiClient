import React from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import InnerAcc_para from './innerAc_para'

function DayCare_Para({ saveForm, saveFile, data, student, service }) {

    let arrfileFixed = []
    let arrfile = [{ name: "טבלת GAS" }, { name: "טופס קידוד" }]

    return <div>
        <FixedFiles saveFile={saveFile} data={data} arrfile={arrfileFixed} service={service} />
        <AccordionYears saveForm={saveForm} saveFile={saveFile} student={student} data={data} service={service} arrfile={arrfile} />
    </div>
}

export default DayCare_Para