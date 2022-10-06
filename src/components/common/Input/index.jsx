import React from 'react'
import styles from "./style.module.css"

const Input = ({ placeholder, onChange, required, name, defaultValue, ...props }) => {

    return (
        <div className={styles.container}>
            <input  {...props} defaultValue={defaultValue} required={required} className={styles.inputs} placeholder={placeholder} onChange={onChange} name={name} />
        </div>
    )
}

export default Input