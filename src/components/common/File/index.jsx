import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from "./style.module.css"


function File({ placeholder, saveFile, place, defaultValue, name, date, optional, fileName, setFileName }) {
    const [cName, setCName] = useState()

    useEffect(() => {
        if (optional) {
            setFileName('...שם הטופס')
        }
    }, [])

    return <div className={styles.file}>
        {optional ?
            <label for="fileInput">
                <span className={styles.addFile}><input className={styles.fileName} placeholder={fileName || '...שם הטופס'} onChange={(e) => setCName(e.target.value)} name={fileName} />
                    <form onSubmit={(e) => saveFile(e, place, name, "filesOp")}>
                        <input id="fileInput" type="file" name={name} />
                        <button type='submit'>שמירה</button>
                    </form>
                </span>
            </label> :
            <label for="fileInput">
                <span className={styles.addFile}>{placeholder}
                    <form onSubmit={(e) => saveFile(e, place, name, "files")}>
                        <input id="fileInput" type="file" name={name} />
                        <button type='submit'>שמירה</button>
                    </form>
                </span>
            </label>}
        {date &&
            <div className={styles.container}>
                <input className={styles.inputs} placeholder={"תאריך תפוגה"} defaultValue={defaultValue} name={`${name}-date`} onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")} />
            </div>}
    </div>
}

export default File