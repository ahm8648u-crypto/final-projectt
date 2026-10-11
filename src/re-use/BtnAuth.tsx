import type { ReactNode } from "react"
import Spinning from "./spinning"

type Tprops={
    children:ReactNode,
    isValid:boolean,
    isDirty:boolean,
    isLoading ?:boolean 
}
export default function BtnAuth({children , isDirty,isValid,isLoading}:Tprops) {
  return (
<div className=" p-2 rounded-4xl bg-white md:w-37.5 mx-auto w-full">
    
             <button disabled={!isValid||!isDirty} className="disabled:cursor-not-allowed  p-5   border-(--main-color) bg-white text-(--main-color) hover:not-disabled:bg-yellow-900 rounded-3xl w-full hover:not-disabled:text-white hover:not-disabled:border-white border-3 cursor-pointer  mx-auto">
              {isLoading ? <Spinning/> : children}</button>
      </div>  )
}
