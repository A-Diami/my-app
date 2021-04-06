import React, {useState} from 'react'

export default function Picture({imageName, index}) {
    return (
        <div>
             <div className="relative" key={index}> 
                        <button type="submit" className="bg-purple-500 w-7 h-5 pb-1 font-thin rounded-xl text-center flex justify-center items-center absolute text-white-500 right-0 text-sm focus:outline-none"
                        onClick={ () => setImages(images.filter((name, i) => i === index))}>x</button>
                        <img className="w-20 mx-auto" src={imageName}/>
                   </div>
        </div>
    )
}
