import React, { useEffect } from 'react'
import styles from "./style.module.css"

function File({ placeholder, saveFile, service, defaultValue, name, date, optional, fileName, setFileName }) {

    useEffect(() => {
        if (optional) {
            setFileName('...שם הטופס')
        }
    }, [])

    return <div className={styles.file}>
        {optional ?
            <label for="fileInput">
                <span className={styles.addFile}><input className={styles.fileName} placeholder={fileName || '...שם הטופס'}
                    onChange={(e) => setFileName(e.target.value)} name={fileName} />
                    <form onSubmit={(e) => saveFile(e, service, fileName === '...שם הטופס' ? "file optionaly" : fileName, "filesOp")}>
                        <input id="fileInput" type="file" name={name} />
                        <button type='submit'>שמירה</button>
                    </form>
                </span>
            </label>
            :
            <label for="fileInput">
                <span className={styles.addFile}>{placeholder}
                    <form onSubmit={(e) => saveFile(e, service, name, "files")}>
                        <input id="fileInput" type="file" name={name} />
                        <button type='submit'>שמירה</button>
                    </form>
                </span>
            </label>}
        {date &&
            <div className={styles.container}>
                <input className={styles.inputs} placeholder={"תאריך תפוגה"} defaultValue={defaultValue} name={`${name}-date`}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")} />
            </div>}
    </div>
}

export default File