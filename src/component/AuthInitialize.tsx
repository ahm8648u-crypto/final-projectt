import { useEffect } from "react"
import useAuth from "../zustand/authData"

export default function AuthInitialize() {
    const getUser =useAuth(s=>s.getUserData)
    useEffect(()=>{
getUser()
    },[getUser])
  return null
  
}
