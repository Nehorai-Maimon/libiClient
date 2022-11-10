import React from 'react'
import { useState } from 'react';
import styles from "./style.module.css"


function File({ onChangeFile, onChangeDate, placeholder, defaultValue, name, date, optional, setFileName }) {
    // const [fileName, setFileName] = useState("")

    return (
        <div className={styles.file}>
            {optional ?
                <label for="fileInput">
                    <span className={styles.addFile}><input className={styles.fileName} placeholder='...שם הטופס' onChange={(e) => setFileName(e.target.value)} name={name} />
                        <input id="fileInput" type="file" onChange={onChangeFile} name={name} />
                    </span>
                </label> :
                <label for="fileInput">
                    <span className={styles.addFile}>{placeholder}
                        <input id="fileInput" type="file" onChange={onChangeFile} name={name} />
                    </span>
                </label>}
            {date &&
                <div className={styles.container}>
                    <input className={styles.inputs} placeholder={"תאריך תפוגה"} onChange={onChangeDate} defaultValue={defaultValue} name={`${name}-date`} onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} />
                </div>}


        </div>
    )
}

export default File