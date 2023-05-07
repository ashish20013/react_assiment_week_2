import React from 'react'

export default function Card( props) {

  const {Pic , Brand , productName , productDescription , Price , Rating} = props

const btn = ()=>{
    return(
         alert ( 'Product of is  {productName} , which is Shoes of brand Adidas has of rupees {Price} is added in the cart , please proceed to pay !!!')
    )
}

  return (
    <>
    <div>
        <img src={Pic}/>
        <h2>{productName}</h2>
        <h4>{Brand}</h4>
        <p>{productDescription}</p>
        <h2><b>{Price}</b></h2>
        <p>{Rating}</p>
        <button onClick={btn}>Add to Card</button>

    </div>
    </>
  )
}











// productDetails = {
//     productId : ‘1’,
//     productPic : ‘’,
//     productName : ‘’,
//     Brand : ‘
//     productDescription : ‘’,
//     Price : ‘7$’,
//     Rating : 
//  }
 