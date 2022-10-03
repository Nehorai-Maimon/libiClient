import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import styles from "./style.module.css"


function SwitchBtn({ label, status, setStatus }) {

    return (
        <div>
            <Form>
                <Form.Check
                    name="status"
                    type="switch"
                    id="custom-switch"
                    defaultChecked="true"
                    onChange={() => setStatus(!status)}

                />
            </Form>
            <div className={styles.label}>{label}</div>
        </div>


    );
}

export default SwitchBtn;