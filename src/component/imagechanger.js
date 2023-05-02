import { useState, useRef, useEffect } from 'react'

const Imagechang = () => {
    const [imageLink, setImageLink] = useState(true)
    const photoRef = useRef(null)

useEffect(()=>{photoRef.current.src="https://source.unsplash.com/random/300×300/?fruit"},[imageLink])

    const handleClick = () => {
        // setImageLink(!imageLink)

        
    }
    return (
        <>
            <div>
                <img src={imageLink} ref={photoRef} />
                <button onClick={()=>{ setImageLink(!imageLink)}}>want to change push it</button>

            </div>
        </>
    )

}
export default Imagechang;