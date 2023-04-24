import React, { useState } from 'react'
import BasicFiles from './basic'

function Club({ service, saveFile, setData, data, student }) {

    let arrfile = [{ name: "אבחון", date: true }, { name: "רישום שנתי", date: false }]

    return <BasicFiles saveFile={saveFile} service={service} place="club" student={student} arrfile={arrfile} />
}

export default Club