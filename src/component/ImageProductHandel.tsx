import { useState } from "react";
import { LuLoader } from "react-icons/lu";

export default function ImageProductHandel({src}:{src:string}) {
    const [Loader ,setLoader]=useState(true)
  return (
    
<div className="relative">
    
         {Loader&&<div className="size-full absolute inset-0 bg-gray-200 flex items-center justify-center text-2xl"><LuLoader className="animate-spin"/></div>}
        <img className='h-34 sm:h-65 object-contain'
        onLoad={()=>setLoader(false)}
        onError={()=>setLoader(false)}

        src={src}
         width={286}
          height={100} 
          alt="" />
        </div>  )
}
