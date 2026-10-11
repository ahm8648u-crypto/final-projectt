import { useState } from "react";
import { LuLoader } from "react-icons/lu";

export default function Orderimage({src}:{src:string}) {
    const [Loader ,setLoader]=useState(true)
  return (
    
<div className="relative">
    
         {Loader&&<div className="size-full absolute inset-0 bg-gray-200 flex items-center justify-center text-2xl"><LuLoader className="animate-spin"/></div>}
        <img className=' bg-white size-12 rounded-[50%] object-contain'
        onLoad={()=>setLoader(false)}
        onError={()=>setLoader(false)}

        src={src}
         width={400}
          height={100} 
          alt="" />
        </div>  )
}
