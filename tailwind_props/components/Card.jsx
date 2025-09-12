import React from "react";

function Card({No,btn="Visit"}){
    
    return(
    <>
     <div className='bg-blue-700 p-4 text-black rounded-2xl m-2 h-100'>
        <img src="https://www.pexels.com/video/drone-footage-on-the-seaside-7126452/"/>
        Image No {No} <br/><br/>
        <button>{btn}</button>
      </div>
    </>
    )
}

export default Card