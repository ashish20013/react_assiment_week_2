import { Fragment } from 'react';
import './card.css'

export default function Card(cardin ) {
    const { image , name , discribtion , price  } =  cardin

    return (
        <Fragment>
            <div className='flax'>
                <div className = " product1"> 
                <img className='d' src={image}/>
                <h1 className='a'> {name} </h1>
                <p className='b'> {discribtion}</p>
                <h2 className='c'>{price}</h2>
                <butoon className="d" onclick =" function (){alert(Like)}" >ADD TO CART</butoon>
            </div>

            </div>
        </Fragment>

    )

}