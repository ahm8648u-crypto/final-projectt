import {IconButton, InputAdornment, TextField} from '@mui/material'
// import { SlotProps } from '@mui/material'
import type { input } from 'motion/react-client'
 import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from 'react';

 export type Tprops={
    type:string,
    label:string,
    name:string,
    error:boolean,
    errorText:string,
    register?:any
 }
export default function Input({type,label,name,error,errorText,register}:Tprops) {
    const [isVisible,setVisible]=useState(false)
  return (
    <TextField
      label={label} 
       {...register(name)}
      type={type!=='password'?type:!isVisible?'password':'text'}
      fullWidth
      error={error}
      helperText={errorText}
      variant="outlined"
       slotProps={
  type === "password"
    ? {
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=>setVisible(prev => !prev)}>
                {!isVisible ? <LuEyeClosed/>:<FaEye />}
                
              </IconButton>
            </InputAdornment>
          ),
        },
      }
    : undefined
} />
     

  )
}
