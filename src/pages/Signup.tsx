 import BtnAuth from "../re-use/BtnAuth"
import Heading from "../re-use/Heading"
import { useState } from "react"
 import Input from "../re-use/input"
import { useForm, type SubmitHandler } from "react-hook-form"
import { registerSchema, type TinputRegister } from "../validation/Registervalidation"
import {zodResolver}from '@hookform/resolvers/zod'
import useAuth from "../zustand/authData"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'

export default function Signup() {
    const {register,handleSubmit,formState: { errors ,isValid,isDirty}}=useForm<TinputRegister>({
        resolver: zodResolver(registerSchema),
        mode:'onChange'
    }
    )
    const navigate=useNavigate()
    const [err,setErr]=useState('')
    const handelRegister=useAuth(s=>s.handelRegister)
    const loadingRegister=useAuth(s=>s.loadingRegister)

    const  formSubmitHandeler :SubmitHandler<TinputRegister>=async (data)=>{
      const res = await  handelRegister(data);
      if(!res.success){
     setErr(res.message as string)

      }else{
      setErr('')
      navigate('/Login')
      toast.success('Success Sign-up , Complete Log-in......')
      }
        
    }

  return (
    <>
    <div className="flex flex-col gap-10 my-10 mx-8 ">
   <Heading title="Register"/>
    <form  onSubmit={handleSubmit(formSubmitHandeler)}  className=" h-[60%] border border-(--main-color) mx-auto  p-0   sm:p-4 rounded-2xl  w-full lg:w-[50%] bg-white flex flex-col gap-3">
        <div className="flex gap-1 ">
      <p className="flex items-center p-2 sm:p-2 bg-(--main-color) border border-(--main-color)  rounded-3xl w-full sm:w-[80%] text-[12px] sm:text-sm text-white text-xl font-bold">CREATE YOUR ACOUNT......</p>
      <span className="p-6 rounded-[50%] bg-(--main-color) border border-(--main-color) hidden sm:flex"></span> <span className="border border-(--main-color) p-6 rounded-[50%] bg-(--main-color) hidden sm:flex"></span>
       <span className="p-6 rounded-[50%] bg-(--main-color) border border-(--main-color) hidden sm:flex"></span>
      </div>



      <div className="flex md:flex-row flex-col gap-2 w-full">
        <div className="bg-white w-full rounded">
       <Input register={register} type="text" label="FirstName" name="firstName" error={errors.firstName?true : false} errorText={errors.firstName?.message ?? ""} />
       </div>
       <div className="w-full bg-white rounded ">
       <Input register={register} type="text" label="LastName" name="lastName" error={errors.lastName?true:false} errorText={errors.lastName?.message ?? ""} />
       </div>
       <div className="w-full bg-white rounded">
       <Input register={register} type="date" label="" name="date" error={errors.date?true:false} errorText={errors.date?.message ?? ""} />
       </div>
      </div>



      <div className="flex md:flex-row flex-col gap-2 w-full">
       <div className="w-full bg-white rounded ">
       <Input register={register} type="number" label="Phone" name="phone" error={errors.phone?true : false} errorText={errors.phone?.message ?? ""} />
       </div>
       <div className="w-full bg-white rounded ">
       <Input register={register} type="email" label="Email" name="email" error={errors.email?true:false} errorText={errors.email?.message ?? ""} />
       </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 w-full">
       <div className="w-full bg-white rounded ">
       <Input register={register} type="password" label="Password" name="password" error={errors.password?true:false} errorText={errors.password?.message ?? ""} />
       </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 w-full">
       <div className="w-full bg-white rounded ">
       <Input register={register} type="password" label="Confirm Your Passwors" name="confirmPassword" error={errors.confirmPassword?true:false} errorText={errors.confirmPassword?.message ?? ""}/>
       </div>
      </div>
      {err && <div className="w-full py-4 text-center border text-red-900 border-b-red-600 bg-red-300">{err}</div>}
      <BtnAuth isLoading={loadingRegister} isDirty={isDirty} isValid={isValid}>
        Login
      </BtnAuth>

    </form>
    </div>
    </>
  )
  
}
