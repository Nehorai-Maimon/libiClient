import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import React from 'react'

function DayCare_Social({ student, deleteFile, saveForm, saveFile, data, service }) {

    let arrfileFixed = [{ name: "אינטייק סוציאלי" }]
    let arrfile = []

    return <div>
        <FixedFiles saveFile={saveFile} deleteFile={deleteFile} data={data} student={student} arrfile={arrfileFixed} service={service} />
        <AccordionYears student={student} saveForm={saveForm} data={data} arrfile={arrfile} service={service} />
    </div>
}

export default DayCare_Social