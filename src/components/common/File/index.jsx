import React from 'react'
import styles from "./style.module.css"


function File({ onChangeFile, onChangeDate, required, placeholder, defaultValue, name }) {
    return (
        <div className={styles.file}>
            <label for="fileInput">
                <span className={styles.addFile}>{placeholder}
                    <input id="fileInput" type="file" onChange={onChangeFile} required={required} name={name} />
                </span>
            </label>
            <div className={styles.container}>
                <input className={styles.inputs} placeholder={"תאריך תפוגה"} required onChange={onChangeDate} defaultValue={defaultValue} name={`${name}-date`} onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")} />
            </div>


        </div>
    )
}

export default File