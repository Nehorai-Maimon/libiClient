import React from 'react'
import styles from "./style.module.css"


function Select({ name, placeholder, options, required, ...props }) {
    return (
        <div>
            <select className={styles.selects} {...props} name={name} required={required}>
                <option value="" disabled selected hidden>{placeholder}</option>
                {options.map(e => <option value={e}>{e}</option>)}
            </select>
        </div>
    )
}

export default Select