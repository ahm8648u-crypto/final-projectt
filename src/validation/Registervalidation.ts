import {z} from 'zod'

export const registerSchema=z.object({
firstName:z.string().min(1,{message:'Enter Your First Name'})
.regex(/^[a-zA-Z]+$/),
lastName:z.string().min(1,{message:'Enter Your last Name'})
.regex(/^[a-zA-Z]+$/),
date:z.string().min(1,{message:'Date is Required'}),
phone:z.string().min(1,{message:'Enter Your Phone Number'})
.regex(/^01[0-25][0-9]{8}$/,{message:'Invalid Number'}),
email:z.string().min(1,{message:'Enter Your Email'})
.email({message:'Invalid Email'}),
password:z.string().min(1,{message:'Password Is Invalid'})
.regex(/(?:.*[A-Z]){2}/,{message:'Enter 2 Capital Character at least'})
.regex(/(?:.*[0-9]){3}/,{message:'Enter 3 Number Or More'})
.regex(/.*[ !@#$%^&*()_+{}|[\]\\:";'<>?,./].*/,{message:'Enter 3 special character at least'})
.min(8,{message:'Password Must Be 8 Character Or More'}),
confirmPassword:z.string().min(1,{message:'*Password Is Required'})



})  .refine((data) => data.password === data.confirmPassword, {
    message: "Password Not Matched",
    path: ["confirmPassword"],
  });



export type TinputRegister=z.infer<typeof registerSchema>