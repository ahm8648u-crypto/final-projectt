 import BtnAuth from "../re-use/BtnAuth"
import Heading from "../re-use/Heading"
import { useState } from "react"
 import Input from "../re-use/input"
import { useForm, type SubmitHandler } from "react-hook-form"
import {zodResolver}from '@hookform/resolvers/zod'
import useAuth from "../zustand/authData"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { LoginSchema, type TinputLogin } from "../validation/Loginvalidation"

export default function Signin() {
    const {register,handleSubmit,formState: { errors ,isValid,isDirty}}=useForm<TinputLogin>({
        resolver: zodResolver(LoginSchema),
        mode:'onChange'
    }
    )
    const navigate=useNavigate()
    const [err,setErr]=useState('')
    const handelLogin=useAuth(s=>s.handelLogin)
    const loadingLogin=useAuth(s=>s.loadingLogin)

    const  formSubmitHandeler :SubmitHandler<TinputLogin>=async (data)=>{
        handelLogin(data)

      const res = await  handelLogin(data);
      if(!res.success){
     setErr(res.message as string)

      }else{
      setErr('')
      navigate('home')
      toast.success('Success Log-in......')
      }
        
    }

  return (
    <>
    <div className="flex flex-col gap-10 my-12 m-8">
      <Heading title="Login "/>
   
    <form  onSubmit={handleSubmit(formSubmitHandeler)}  className=" h-[60%] border border-(--main-color) mx-auto  p-4 my--8  sm:p-4 rounded-2xl  w-full lg:w-[50%] bg-white flex flex-col gap-3">
       
      <p className="flex items-center p-0 sm:p-2 text-(--main-color)   rounded-3xl w-[80%] text-[12px] sm:text-lg text-xl font-bold m-3" >Login Now.....</p>

      <div className="flex md:flex-row flex-col gap-2 w-full">
      
       <div className="w-full bg-white rounded ">
       <Input register={register} type="email" label="Email / Phone" name="email" error={errors.email?true:false} errorText={errors.email?.message ?? ""} />
       </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 w-full">
       <div className="w-full bg-white rounded ">
       <Input register={register} type="password" label="Password" name="password" error={errors.password?true:false} errorText={errors.password?.message ?? ""} />
       </div>
      </div>
      
      {err && <div className="w-full py-4 text-center border text-red-900 border-b-red-600 bg-red-300">{err}</div>}
      <BtnAuth  isLoading={loadingLogin} isDirty={isDirty} isValid={isValid}>
        Login
      </BtnAuth>

    </form>
    </div>
    </>
  )
  
}
