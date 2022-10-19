import styles from "./style.module.css"
import students from '../../fakeData'
import { useNavigate } from "react-router-dom";



function Table() {
    let navigate = useNavigate();

    //filter
    let newArray = students.filter(function (e) {
        return e.gender === "זכר"
    }
    );
    console.log(newArray);

    return (
        <div className={styles.container}>
            <table>
                <tr>
                    <th>תעודת זהות</th>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>גיל</th>
                    <th>מין</th>
                    <th>איש קשר</th>
                    <th>טלפון</th>
                    <th>מסמכים ואישורים</th>
                    <th>עריכה</th>
                </tr>
                {students.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{"גיל"}</td>
                            <td>{val.gender}</td>
                            <td>{val.contact[0].contactFirstName} {val.contact[0].contactLastName}-{val.contact[0].relative}</td>
                            <td>{val.contact[0].contactPhone}</td>
                            <td>{"??"}</td>
                            <td><button onClick={() => navigate('/edit')}>עריכה</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Table;
