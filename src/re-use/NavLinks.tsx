import type { ReactNode } from "react"
import { NavLink } from "react-router-dom"




type Tlink={
    Name:ReactNode,
    icon :ReactNode,
    href:string,
    dropdown?:ReactNode[]
}
export default function NavLinks({Name,icon,href,dropdown} :Tlink) {
  return (
    <div className="relative group">
    <NavLink to={href}>
        <div className="flex items-center">
        <span>{icon}</span>
        <span className="hover:text-(--main-color) ">{Name}</span>
        </div>
    </NavLink>
      {dropdown && (
        <div className="
          absolute
          top-full
          left-0
          hidden
          group-hover:block
           
         
          bg-white
          text-black
          shadow-lg  min-w-45  z-50
        ">
          {dropdown.map((item , index) => (
            
            <div
              key={index}
              className="
                px-4
                py-3
               hover:text-(--main-color) 
             
                cursor-pointer
              "
              
              
            >
              {item}
            </div>
            
          ))}
        
        </div>

      )}
     
    </div>
  )
}
