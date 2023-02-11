import styles from "./style.module.css"
import dashboard from "../../images/dashboard.jpeg"

export default function Dashboard(){
    return <div>
        <img src={dashboard} alt="" height={50 + "%"} width={70+ "%"}/>
    </div>
}