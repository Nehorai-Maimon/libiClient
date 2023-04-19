import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import React from 'react'

function DayCare_Services({ saveForm, deleteFile, saveFile, student, data, service }) {
    // לשאול את מיכל איך היא שלחה את שני הדברים
    let arrfileFixed = []
    let arrfile = []

    return <div>
        <FixedFiles data={data} deleteFile={deleteFile} saveFile={saveFile} arrfile={arrfileFixed} student={student} service={service} />
        <AccordionYears saveForm={saveForm} saveFile={saveFile} data={data} student={student} service={service} arrfile={arrfile} />
    </div>
}

export default DayCare_Services; 