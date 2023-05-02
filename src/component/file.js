import { useRef } from 'react'

const Filetaker = () => {
    const fileRef = useRef(null)

    const handleClick = () => {
        fileRef.current.click();
    };
    return (
        <>
            <div style={{ textAlign: 'center' , margin:"80px" , width:"60vd"}}>

                <button onClick={handleClick} style={{ color: 'blue' }}> Pick File</button>
                <input type='file' ref={fileRef} hidden/>
            </div>
        </>
    )
}
export default Filetaker;