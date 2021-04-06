 import React, { Component, useEffect, useState } from 'react'
 
 export default function Image() {
    const [images, setImages] = useState(
        [
            'finalfinal.png',
            'finalLogo.png',
            'logo192.png'
        ]
    )

    const [image, setImage] = useState(null);

   function ImageComponent() {
        return (
            images.map( (name, index) => {
                return(
                   <div className="relative" key={index}> 
                        <button type="submit" className="bg-purple-500 w-7 h-5 pb-1 font-thin rounded-xl text-center flex justify-center items-center absolute text-white-500 right-0 text-sm focus:outline-none"
                        onClick={ () => setImages(images.filter((image, i) => i === index))}>x</button>
                        <img className="w-20 mx-auto" src={name}/>
                   </div>
                )
             })
        )
    }

    const [myTimer, setMyTimer] = useState(null);

    useEffect( () => {
        setMyTimer(setInterval( () => {
            console.log("Timer appelle")
        }, 1000))

        return () => console.log("Console picture demonte");

    }, []);

   function handleImageName(event){
        setImage(event.target.value);

    }

    function addImageName() {
        let newImage = [image, ...images]
        setImages(newImage);
    }
     return (
       <div className="container mx-auto">
             <div className="flex items-center justify-between">
             <ImageComponent />
         </div>
         <div className="mr-5">
            <input type="text" className="border border-gray-600 shadow rounded p-3 mr-3 outline-none" onChange={handleImageName} />
            <button type="submit" className="bg-purple-900 text-white rounded py-2 px-3"  onClick={addImageName}>Ajouter une image</button>
        </div>
       </div>
     )
 }
 

// export default class Image extends Component {

//     constructor(props){
//         super(props);
//         this.state = {timer: null}
//     }


//     componentDidMount(){
//         this.setState({timer: setInterval( () =>{
//             console.log("Timer appele");
//         }, 1000) })
        
//     }
//     componentWillUnmount() {
//        console.log("component detruit")
//        clearInterval(this.state.timer);
//     }
//     render() {
//         return (
//             <img className="w-20 mx-auto" src="logo192.png"/>
//         )
//     }
// }
