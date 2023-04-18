import AccordionYears from '../Accordion'
import FixedFiles from '../fixedFiles'
import React from 'react'

function DayCare_Services({ saveForm, saveFile, student, data, service }) {
    // לשאול את מיכל איך היא שלחה את שני הדברים
    let arrfileFixed = []
    let arrfile = []

    return <div>
        <FixedFiles data={data} saveFile={saveFile} arrfile={arrfileFixed} service={service} />
        <AccordionYears saveForm={saveForm} saveFile={saveFile} data={data} student={student} service={service} arrfile={arrfile} />
    </div>
}

export default DayCare_Services; 