import { LuPhoneCall } from "react-icons/lu";
import panner from "../images/image.png"
import { FaHome } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import NavLinks from "../re-use/NavLinks";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import { VscClockface } from "react-icons/vsc";
import useAuth from "../zustand/authData";
import useProduct from "../zustand/productstore";
import Spinning from "../re-use/spinning";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import useWishlist from "../zustand/wishListStore";
import useCart from "../zustand/CartStore";
import { useState } from "react";
import Onpages from "../pages/Onpages";



export default function Nav() {
   const [menuOpen, setMenuOpen] = useState(false);

    const user= useAuth(s=>s.user)
    const logoutHandel = useAuth(s => s.logoutHandel)
    const pending=useAuth(s=>s.loadingUser)
    const pendingLogout=useAuth(s=>s.loadingLogout)
   const pr=<NavLink className="pr" to={'products'}>products</NavLink> 

 const categories =useProduct(s=>s.categories)
    const loadingCategory=useProduct(s=>s.loadingCategory)
    const getCategory =useProduct(s=>s.getCategory)
    const wishlist=useWishlist(s=>s.wishlist)
    const clearwishlist=useWishlist(s=>s.clearwishlist)
    const cart=useCart(s=>s.cart)


 const links=[
    {Name:<NavLink className="ho" to={'home'}>Home</NavLink> , icon:<FaHome />,href:'/'},
    {Name:<NavLink className="ho" to={'shop'}>Shop</NavLink>,icon:<FaHome />,href:'/'
     
    },
    {Name:pr , icon:<CiShop  />,href:'products', 

        dropdown:[ loadingCategory
            ? [<Spinning key="loading" />]
            : categories.map((cat) => (
                <Link
                className="flex flex-col  hover:text-black w-full"
                    key={cat.id}
                    to={`/Shop/${cat.name}/${cat.id}`}
                >
                    <p className=" my-2 ">{cat.name}</p>
                </Link>
            ))]
    },

]
    if(pending){
        return <Spinning/>
    }
    const signout= async()=>{
       await logoutHandel()
       clearwishlist()

    }
  return (
    <>
      <div className="sm:flex hidden invisible sm:visible  h-max w-full text-[15px] bg-(--main-color) text-white justify-between px-12.5 py-3.25">
        <div className="flex items-center gap-1.25  "><LuPhoneCall/><p className="">+201205186077</p></div>
        <div className=" 2xl:block xl:block lg:block hidden"><p className=" ">TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03 ”</p></div>
        <div className="flex gap-10">
            <p className="flex items-center text-3xl"><GiWoodenChair/></p>
            <p className="flex items-center text-3xl"><FaShoppingBag/></p>
            <p className="flex items-center text-3xl"><VscClockface/></p>
        </div>
      </div>

      <div className="flex items-center justify-between px-0 md:px-2.5 py-0 sticky  top-0 z-150  sm:py-5  bg-white w-full shadow-xl ">
        <div className="flex items-center  gap-2 md:gap-8 lg:gap-5">
            <div className="shrink-0"><img className="w-30" src={panner} alt="" /></div>
            <div className="" ><ul className=" gap-3.75 xl:flex hidden w-full">
                {links.map((el)=>(
                    <li
    className="flex"
    key={el.href
    }
    onClick={() => {
        if (el.Name === pr) {
          if(!categories.length){
            getCategory()
          }
        }
    }}
>
    <NavLinks {...el} />
</li>
         
                ))}
                
                </ul>
                </div>
        </div>
          {!user ?
           (<div className="w-75 ms-37.5 flex gap-3">
            <Link className="  sm:p-3 my-auto   text-(--main-color) underline block sm:hidden text-[11px]  mx-2  " to={'login'}>سجل دخول</Link>
            <Link className=" sm:p-3  my-auto text-[11px] block sm:hidden underline  text-(--main-color) " to={'signup'}>انشاء حساب</Link>
            

            <NavLink className="hidden sin sm:flex w-full px-3  py-2 border border-(--main-color) sm:justify-center bg-white text-(--main-color) hover:bg-(--main-color) hover:text-white  text-center " to={'login'}>SIGN IN</NavLink>

            <NavLink className="hidden sup sm:flex w-full px-3 py-2  border border-(--main-color) sm:justify-center bg-white text-(--main-color) hover:bg-(--main-color) hover:text-white mx-2  text-center" to={'signup'}>SIGN UP</NavLink>

           </div>)
  
          :(<div className="mx-15">
          <p className="sm:text-sm text-[8.5px] text-black   bg-(--main-color) px-1 sm:px-1  py-0 sm:py-2 rounded-2xl">
           welcome : <span className="text-amber-200 ">{user.user_metadata.userName}</span>
           </p>
           <p className="text-3xl cursor-pointer"></p>
           
           </div>)}

           {user ?
          ( <div className="flex items-center gap-0 sm:gap-2.5   ">
            <button  disabled={pendingLogout} className="flex gap-2  sm:gap-3 items-center cursor-pointer text-lg mr-3 sm:text-2xl text-red-300" onClick={signout }><span className="text-sm sm:text-lg  text-gray-400">LogOut</span>{pendingLogout?<Spinning/> :<FiLogOut/>}</button>
            <div className=" relative"><input className="hidden xl:block border rounded-4xl  border-(--main-color) w-70 px-2.5 py-3.25" type="search" placeholder="Search..." /><button className="cursor-pointer hidden xl:block absolute top-0 right-0 text-[24px] text-white bg-(--main-color) p-3.5 rounded-[50%]" ><GoSearch/> </button></div>
            <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-5   text-(--main-color) text-[25px]">
                <NavLink className='heart bg-white' to={'wishlist'}><FaRegHeart/><div className="absolute text-sm bg-(--main-color) py-0.5 px-1.5 text-white sm:top-5 top-1 rounded-[50%] sm:right-22 right-4"><p className="text-[11px]">{wishlist.length}</p></div></NavLink>
                <NavLink className=''  to={'cartpage'}><FiShoppingBag/><div className="absolute text-sm bg-(--main-color) py-0.5 px-1.5 text-white sm:top-5  top-7.5  rounded-[50%] sm:right-12 right-4"><p className="text-[11px]">{cart.length}</p></div></NavLink>
                <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="cursor-pointer text-2xl text-[#b38a5b]"
      >
        <AiOutlineMenu />
      </button>

      <Onpages open={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>
        </div>)
  
          :(<><div className="flex items-center gap-2.5   ">
            {/* <div className=" relative"><input className="hidden xl:block border rounded-4xl  border-(--main-color) w-70 px-2.5 py-3.25" type="search" placeholder="Search..." /><button className="cursor-pointer hidden xl:block absolute top-0 right-0 text-[24px] text-white bg-(--main-color) p-3.5 rounded-[50%]" ><GoSearch/> </button></div>
            <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-5 text-[25px]">
                <NavLink className='heart ' to={'wishlist'}><FaRegHeart/></NavLink>
                <p><FiShoppingBag/></p>
                <p><AiOutlineMenu/></p>
            </div> */}
        </div></>)}
        
      </div>
    </>
  )
}
