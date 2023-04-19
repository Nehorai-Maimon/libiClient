import React from 'react'
import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'

function DayCare_Para({ studentFiles, deleteFile, saveForm, saveFile, data, student, service }) {

    const arrfile = [
        { name: "טבלת GAS" },
        { name: "טופס קידוד" }
    ]
    let arrfileFixed = []

    return <div>
        <FixedFiles studentFiles={studentFiles} deleteFile={deleteFile} saveFile={saveFile} student={student}  data={data} arrfile={arrfileFixed} service={service} />
        <AccordionYears saveForm={saveForm} saveFile={saveFile} student={student} data={data} service={service} arrfile={arrfile} />
    </div>
}

export default DayCare_Para