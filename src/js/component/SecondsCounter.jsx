import React, {useEffect, useState} from "react";

const SecondsCounter = () => {
    
    const [seg, setSeg] = useState(0);
    
    let timer;

    useEffect( ()=>{

        timer = setInterval(()=>{
            {setSeg(seg+1)}
            if (seg === 100){
                 {setSeg(0)};
                alert("tiempo agotado");    
            }
            setInput(inputRef.current.value)
        },1000)
        return ()=> clearInterval(timer)
    });  
   const formattedSeg = seg.toString().padStart(6, "0");
     
    return(

         <div className="rounded border ">
            <div className="text-light">          
                <h1>             
                <i class="fa-solid fa-clock"></i> {formattedSeg}
                 </h1>        
            </div>     
         </div>   
    );
}

export default SecondsCounter;