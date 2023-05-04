
import './App.css';
import Inbox from './component/inbox';

function App() {

// api =  https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP 

const getOtp=()=>{

let number = document.getElementById("input")
console.log(number.value)
//   fetch ("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP")

// } .tehen((responce)=>responce.json)
//   .then(())
fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  
  body: JSON.stringify({
    mobile : number.value
  })
})
// .then( (response) => { 
  
// });

}
 return(
    <div className="App">
      <button onClick={getOtp}> Get OTP </button>
      <Inbox/>
    </div>
  );
}

export default App;
