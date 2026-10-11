 import { TiHeart } from "react-icons/ti";
import { IoMdCart } from "react-icons/io";
import type { Tproduct } from '../zustand/productstore';
import ImageProductHandel from "./ImageProductHandel";
import { NavLink } from "react-router-dom";
import useWishlist from '../zustand/wishListStore'
import { ImSpinner4 } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import useCart from "../zustand/CartStore";


export default function ProductCard({image,title,price,discount,id}:Tproduct) {
    const finalPrice=price-(price*discount/100)
    const togglewishlist=useWishlist(s=>s.toggleWishList)
    const loadingInsert =useWishlist(s=>s.loadingInsert)
    const wishlist=useWishlist(s=>s.wishlist)
    const togglecart=useCart(s=>s.toggleCart)

    const isLiked=wishlist.some(el=>el.product_id==id)


    
  const  isLoading=loadingInsert==id
  return (
    <>
    <div className='shadow-2xl border-sm  w-80 p-4 mt-15 bg-white overflow-hidden relative rounded-2xl '>
      {
        isLiked?<div onClick={()=>togglewishlist(id)} className="absolute inset-e-7 top-5 text-red-600 z-20 text-2xl cursor-pointer"><FaHeart/></div>:
        <button onClick={()=>togglewishlist(id)} className="absolute inset-e-7 top-5 z-20 text-2xl cursor-pointer" >   <FaRegHeart/></button>
      }
        <div className='absolute -left-5 rotate-320 w-28 h-5 top-5 bg-red-600 z-50 text-center text-white'><p className='text-sm '>Sale {discount}%</p></div>
        <ImageProductHandel src={image}/>
        <p className='text-center mt-4 font-bold'>{title}</p>
        <div className='flex justify-center mt-3 gap-3'><p>${finalPrice}</p> <del className='text-red-800'>{price}</del></div>
        <div className='flex justify-between mt-4'>
          {isLiked?<div
            className='border p-2 bg-white hover:bg-white hover:text-black text-2xl cursor-pointer duration-400'><NavLink onClick={()=>togglewishlist(id)} to={''}>{isLoading?<ImSpinner4 className="animate-spin"/> :<TiHeart className=" text-red-600"/>}</NavLink></div>:<div
            className='border p-2 bg-(--main-color) text-white hover:bg-white hover:text-black text-2xl cursor-pointer duration-400'><NavLink onClick={()=>togglewishlist(id)} to={''}>{isLoading?<ImSpinner4 className="animate-spin"/> :<TiHeart/>}</NavLink></div>}
            
            <div
            className='border p-2 bg-(--main-color) text-white hover:bg-white hover:text-black text-2xl cursor-pointer duration-400'><NavLink to={''} onClick={()=>togglecart(id)}><IoMdCart/></NavLink></div>

        </div>
    </div>
    </>
  )
}
