// import logo from './logo.svg';
// import './App.css';
import Card from './component/card';


export default function App() {


  const cardDetails=[ {
      id : 1,
      Pic: "https://pixabay.com/photos/cranes-industry-crane-system-port-7921948/",
      Brand : " watch",
      productName : "  this watch is best look for your hand and please buy its",
      productDescription: " this watch is american tredition , very Smarty look ",
      Price : "$60",
      Rating : "****"
    },{
      id : 2,
      Pic: "https://tse4.mm.bing.net/th?id=OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa&pid=Api&P=0 ",
      Brand : " watch",
      productName : "  this watch is best look for your hand and please buy its",
      productDescription: " this watch is american tredition , very Smarty look ",
      Price : "$60",
      Rating : "****"
    },{
      id : 3,
      Pic: "https://tse4.mm.bing.net/th?id=OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa&pid=Api&P=0 ",
      Brand : " watch",
      productName : "  this watch is best look for your hand and please buy its",
      productDescription: " this watch is american tredition , very Smarty look ",
      Price : "$60",
      Rating : "****"
    },{
      id : 4,
      Pic: "https://tse4.mm.bing.net/th?id=OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa&pid=Api&P=0 ",
      Brand : " watch",
      productName : "  this watch is best look for your hand and please buy its",
      productDescription: " this watch is american tredition , very Smarty look ",
      Price : "$60",
      Rating : "****"
    },{
      id : 5,
      Pic: "https://tse4.mm.bing.net/th?id=OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa&pid=Api&P=0 ",
      Brand : " watch",
      productName : "  this watch is best look for your hand and please buy its",
      productDescription: " this watch is american tredition , very Smarty look ",
      Price : "$60",
      Rating : "****"
    }
  ] 
  

  return (
    <>
    <div>
      {cardDetails.map((props)=>{
        
        return (
          <Card {...props}/>
        )
      })}
    </div>
    </>
    
  )
}




// 25 may assiment