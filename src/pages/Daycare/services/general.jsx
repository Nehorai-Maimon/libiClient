import React, { useState } from 'react'
import FixedFiles from '../fixedFiles'

// function DayCare_General({ data, service }) {
function DayCare_General({saveFile, student, service }) {

    let arrfile = [
        { name: "ועדת השמה למעון" },
        { name: "ויתור סודיות" },
        { name: "אישור מתן תרופות לרופא" },
        { name: "אישור מתן תרופות להורים" },
        { name: 'טופס קופ"ח- לחברי כללית' },
        { name: 'שאלון תזונתי' },
        { name: 'אינטייק כללי' }
    ]

    return (
        <div>
            <FixedFiles place="general" saveFile={saveFile} student={student} arrfile={arrfile} service={service} />
        </div>
    )
}

export default DayCare_General