import { FiPlus } from "react-icons/fi";
import type { Tproduct } from '../zustand/productstore';
import ImageProductHandel from "./ImageProductHandel";
import { NavLink } from "react-router-dom";
import { TiMinus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

import useCart from "../zustand/CartStore";
import Orderimage from "./OrderImage";


export default function OrderCart({image,title,price,discount,id,stock}:Tproduct) {
    const finalPrice=price-(price*discount/100)
   
    const deletecart=useCart(s=>s.removeCart)
    const updateQuantity = useCart(s => s.updateQuantity)
const qty = useCart(s => s.cart.find(el => el.product_id === id)?.quantity ?? 1)
     const shortTitle = title.split(" ").slice(0, 2).join(" ");

   
    
  return (
    <>
    <div className=' border-sm w-90 h-15  p-4  relative flex items-center gap-2 mb-0.5 right-0 rounded-2xl '>
        <button className="absolute inset-e-2 text-red-700 text-xl top-5 cursor-pointer" onClick={()=>deletecart(id)}><MdDelete/></button>
        <div className="   relative top-0">
        <Orderimage  src={image}/>
        </div>
        <div className="flex items-center  -ml-12">

        <div className="ml-4">
        <p className='text-center mt-4 font-bold'>{shortTitle}</p>
        <div className='flex justify-center gap-3 text-orange-800  w-50'><p>${finalPrice}</p> </div> 
        </div>
        <div className='flex  gap-20   rounded-3xl w-23  relative items-center '>
          <div
            className='border p-1 bg-white hover:text-black text-2xl cursor-pointer duration-400 rounded-[50%] absolute '><NavLink onClick={() => updateQuantity(id, qty - 1)}  to={''}><TiMinus/></NavLink></div>
           
            <div className="absolute left-10.5">{qty}</div>
            <div
            className='border p-1 bg-white hover:text-black text-2xl cursor-pointer duration-400 rounded-[50%] absolute right-0'><NavLink to={''}onClick={() => updateQuantity(id, qty + 1)}><FiPlus/></NavLink></div>
</div>
</div>
        </div>
        
    
   
    </>
  )
}
