import styles from './Cards.module.css'

const Card = ({ Pic, id, Name, Disignation, Company }) => {
    return (

        <div className={styles.card}>
            <img src={Pic} alt="photp" className={styles.imge}/>
            <h2 className={styles.he2}>{Name}</h2>
            <p className={styles.pa}>{Disignation}</p>
            <h3 className={styles.he3}>{Company} </h3>
            </div>
        
    )
}
export default Card;