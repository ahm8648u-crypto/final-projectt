import {z} from 'zod'

export const placingSchema=z.object({
fullName:z.string().min(1,{message:'Enter Your Name'})
.regex(/^[a-zA-Z]+$/),

phone:z.string().min(1,{message:'Enter Your Phone Number'})
.regex(/^01[0-25][0-9]{8}$/,{message:'Invalid Number'}),

city:z.string().min(1,{message:'Enter Your city'}),

area:z.string().min(1,{message:'Enter Your Name'})





})  



export type TinputRegister=z.infer<typeof placingSchema>