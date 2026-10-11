import { Navigate } from "react-router-dom"
import useAuth from "../zustand/authData"
import type { ReactNode } from "react"

export default function ProtectedPage({children}:{children:ReactNode}) {
    const user =useAuth(s=>s.user)
    const loading =useAuth(s=>s.loadingUser)
    if(!loading&&!user){
        return <Navigate to={'/'}/>
    }

  return children
}
