// import logo from './logo.svg';
// import './App.css';
import Card from './component/card';
function App() {
const allproduct =[
  const cardOne {
    id : 1,
    Image : "https://tse4.mm.bing.net/th?id=OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa&pid=Api&P=0 "
    name : " watch"
    discribtion : "  this watch is best look for your hand and please buy its"
    price : "$60"
  }
  const cardTwo = {
    id :2,
    Image : "https://tse3.mm.bing.net/th?id=OIP.XEcHxtwFVjZiNXzPKs1uTwHaFj&pid=Api&P=0"
    name : " watch"
    discribtion : "  this watch is best look for your hand and please buy its"
    price : "$60"
  }
  const cardThree = {
    id :3,
    Image : "https://tse1.mm.bing.net/th?id=OIP.wOCX8Gc3gPyLs7s-FzyrTwHaHa&pid=Api&P=0 "
    name : " watch"
    discribtion : "  this watch is best look for your hand and please buy its"
    price : "$60"
  }
  const cardFour = {
    id : 4,
    Image : "https://tse1.mm.bing.net/th?id=OIP.2YaMVvrQJA3wcs9zggUzqAHaE7&pid=Api&P=0 "
    name : " watch"
    discribtion : "  this watch is best look for your hand and please buy its"
    price : "$60"
  }
  const cardFive = {
    id : 5,
    Image : "https://tse4.mm.bing.net/th?id=OIP.yBIeMuxDuwO7jt1Gk0T__gHaLG&pid=Api&P=0 "
    name : " watch"
    discribtion : "  this watch is best look for your hand and please buy its"
    price : "$60"
  }
]
  //----------------------------------------

  [cardOne , cardTwo , cardThree , cardfour , cardFive].map( (cardin) => < all product key = {all product.id} cardin = { cardin}/>)
  return(
  <div>
      {allproduct}
    </div>
  )
  return (
    
    <div className="App">
      <header className="App-header">
        
        <Card  cardin ={cardOne}/>
        <Card cardin = {cardTwo}/>
        <Card cardin = {cardThree}/>
        <Card cardin = {cardFour}/>
        <Card cardin = {cardFive}/>
      </header>
    </div>
  );
}

export default App;
