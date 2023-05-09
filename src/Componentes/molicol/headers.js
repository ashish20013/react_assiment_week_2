import Headerlogo from "../atom/headerlogo";
import styles from  './headers.module.css'
import { AiOutlineMenu } from "react-icons/ai";  

const  Header =()=>{
    const head = ["Home" , "About" , "Bessuness" , "Investor" , "contactUs"]

    return (
<header className={styles.uper}>
    <div ><Headerlogo/></div>
    <div className= {styles.head}>
        {head.map (value=><h2><b>{value}</b></h2>)}
    </div>
    <AiOutlineMenu className={styles.menu}/>

</header>
    )
};
export default Header;