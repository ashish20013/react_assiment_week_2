

import { useEffect, useState } from 'react';
// import './App.css';



const FetchImage = () => {

    const [image, setImage] = useState("https://www.bing.com/images/search?view=detailV2&ccid=roeJGz3e&id=D05A5411EA64B4C5CC975A318765E47269FE94D9&thid=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ae87891b3dde7b28712b75d14342f1a5%3frik%3d2ZT%252baXLkZYcxWg%26riu%3dhttp%253a%252f%252fthewowstyle.com%252fwp-content%252fuploads%252f2015%252f01%252fnature-wallpaper-27.jpg%26ehk%3djIVFSOxLN%252fQKs4hEfZHNWAeXoeXkeEXooP%252fTy9Vwkek%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1600&q=images&simid=608055661792488714&FORM=IRPRST&ck=7CF637EE1C6B3E620CFB4FB353A34362&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0")

//     useEffect(()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => {
//             return response.json
//         })
//         .then((data) => {
//             setImage(data.message)
//         })
//         .catch((Error) => { console.log(Error) })
//     },[])
//     return (
//     <img src={image} , alt="dog random" height={"400px"} width={"500px"}/>
                
//         )
// }

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImage(data.message);
      })
      .catch(error => {
        console.log('Error :', error);
      });
  }, []);

  return (
    <img 
    src={image}
    height={'800px'}
    width={'900px'}
     alt="MyDoggy" />
  );
}
export default FetchImage;