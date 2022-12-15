import React, { useState } from 'react'
import FixedFiles from '../fixedFiles'

function DayCare_General({ data, service }) {


    let arrfile = [{ name: "ועדת השמה למעון" }, { name: "ויתור סודיות" }, { name: "אישור מתן תרופות לרופא" }, { name: "אישור מתן תרופות להורים" }, { name: 'טופס קופ"ח- לחברי כללית' }, { name: 'שאלון תזונתי' }, { name: 'אינטייק כללי' }]

    return (
        <div>
            <FixedFiles data={data} arrfile={arrfile} service={service} />
        </div>
    )
}

export default DayCare_General