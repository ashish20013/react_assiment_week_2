import styles from './Sliders.module.css'
import Card from '../card/Cards';

const Slider=()=>{

    const cardDetails = [{
        id: 1,
        Pic: "https://th.bing.com/th?q=Elon+Musk+Face+HD&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        Name: " Elon Musk",
        Disignation: "CEO of Twiter and Tesla  ",
        Company: " This is Daynamic per son in tech bessunes field ",
    }, {
        id: 2,
        Pic: "https://th.bing.com/th?q=Ratan+Tata+Old+Pic&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        Name: "Ratan Tata",
        Disignation: "  TATA company owner",
        Company: " This is idia legendry person of bessunes field",
    }, {
        id: 3,
        Pic: "https://th.bing.com/th/id/OIP.2v5XOwC78-M0AEiaISiECAHaEH?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Name: " Anad mahindra",
        Disignation: "   CEO of mahindra company",
        Company: "this is ceo of mahindra and mahindra group of company  ",
    }, {
        id: 5,
        Pic: "https://th.bing.com/th/id/OIP.uhzciCKDNBlyRQkx84bgfgHaG1?w=194&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Name: " Adani",
        Disignation: "  this is adani group of company owners",
        Company: " this watch is american tredition , very Smarty look ",
    }, {
        id: 6,
        Pic: "https://th.bing.com/th/id/OIP.854dy21MseRMf36vSt-A_QHaFK?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Name: "Waren Buffe",
        Disignation: "  investor of america",
        Company: " this many company invested in prsent time ",
    }, {
        id: 7,
        Pic: "https://th.bing.com/th/id/OIP.AftoTxE8v4beTQsroA4mCgHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Name: "Zukarbarg",
        Disignation: "   CEO of Facebook",
        Company: " Hii i am ceo of facebook ",
    }, {
        id: 8,
        Pic: "https://th.bing.com/th/id/OIP.jphbnqKgudgmVuQW3jZm4wHaEL?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Name: " Sundar pichaye",
        Disignation: "  CEO of google",
        Company: " this is ceo of google company",
    }
    ]
    

    return (
        <>
            <h2 className={styles.head}> Hii  this Slider Scrol Bar is Part of Current projects </h2>
            
            <div className={styles.slider}>

                {cardDetails.map((props) => {
                    return (
                        <Card key={props.id} {...props} />
                    )
                })}

            </div>
            
        </>
    )
}
export default Slider;



