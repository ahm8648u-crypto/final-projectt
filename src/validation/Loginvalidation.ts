import {z} from 'zod'

export const LoginSchema=z.object({


email:z.string().min(1,{message:'Enter Your Email'})
.email({message:'Invalid Email'}),
password:z.string().min(1,{message:'Password Is Invalid'})




})  



export type TinputLogin=z.infer<typeof LoginSchema>