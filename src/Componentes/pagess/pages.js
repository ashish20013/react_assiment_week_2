import Header from "../molicol/headers";
import Image from "../atom/imge";
import Content from "../atom/content";
import styles from  './pages.module.css'


const  Page =()=>{

    
return(
<>
<div>
<div className={styles.head}>
    <Header/>
</div>
<div className={styles.content}>
<div >
    <Image/>
</div>
<div className={styles.read}>
    <Content/>
</div>
</div>
</div>
</>

)

};
export default Page;