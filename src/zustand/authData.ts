import type { User } from '@supabase/supabase-js'
import {create} from 'zustand'
import type { TinputRegister } from '../validation/Registervalidation'
import subabase from '../supabase/supabase'
import type { TinputLogin } from '../validation/Loginvalidation'
import { toast } from 'react-toastify'
type Tresult={
    success:boolean,
    message ?:string
}

type TuseAuth={
    user ?: null | User ,
    loadingUser ?:boolean,
    userError ?:string |null,

    loadingRegister :boolean,
    loadingLogin :boolean ,
    loadingLogout:boolean,

    handelRegister :(data :TinputRegister)=>Promise<Tresult>
    handelLogin :(data:TinputLogin)=>Promise<Tresult>
    getUserData :()=>Promise<void>
    logoutHandel :()=>Promise<void>
}

const useAuth=create<TuseAuth>((set)=>({
    user:null,
    loadingUser:false,
    userError:null,

    loadingRegister:false,
    loadingLogin:false,
    loadingLogout:false,

    handelRegister:async(data)=>{
set({loadingRegister:true})
 const {email,password,firstName,lastName,date,phone}=data

 const {error} = await subabase.auth.signUp({
    email,
    password,
  
    options:{
data:{
    userName:firstName+' '+lastName,
    email,
    phone,
    createdat:date,

}
    }
 }
 )
 if(error){
    set({loadingRegister:false})
    return {success:false ,message: error.message}
    
 }

  set({loadingRegister:false})
    return {success:true}
    },
    handelLogin: async(data)=>{
        set({loadingLogin:true})
        const {email,password}=data
        const {data :userData ,error}=await subabase.auth.signInWithPassword({email,password})
         if(error){
    set({loadingLogin:false})
    return {success:false ,message: error.message.includes('Invalid login credentials') ? 'Some Thing Went Wrong (email / password) !!' :error.message}
    
         }
  set({loadingLogin:false ,user:userData.user})
    return {success:true}
    },
    getUserData:async()=>{
        set({loadingUser:true})
        const {data,error}=await subabase.auth.getUser()
        if(error && !data.user){
        set({loadingUser:false })
        return
    }
     set({loadingUser:false,user:data.user})
    },
    logoutHandel:async()=>{
        set({loadingLogout:true})
        const {error}=await subabase.auth.signOut()
        if(error){
        set({loadingLogout:false})

            toast.error(error.message)
            return
        }
        set({loadingLogout:false ,user:null})
        toast.info('Success Logout')
    }
    
 


}
))

export default useAuth