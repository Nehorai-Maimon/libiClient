import React, { useState } from 'react'
import FixedFiles from '../fixedFiles'

function DayCare_General({ studentFiles, deleteFile, saveFile, student, service }) {

    const arrfile = [
        { name: "ועדת השמה למעון" },
        { name: "ויתור סודיות" },
        { name: "אישור מתן תרופות לרופא" },
        { name: "אישור מתן תרופות להורים" },
        { name: 'טופס קופ"ח- לחברי כללית' },
        { name: 'שאלון תזונתי' },
        { name: 'אינטייק כללי' }
    ]

    return <FixedFiles studentFiles={studentFiles}  saveFile={saveFile} deleteFile={deleteFile} student={student} arrfile={arrfile} service={service} />
}

export default DayCare_General