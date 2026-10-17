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
import { GiExitDoor } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import useWishlist from "../zustand/wishListStore";
import useCart from "../zustand/CartStore";
import { useState } from "react";
import Onpages from "../pages/Onpages";
import { FaShopify } from "react-icons/fa";



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

 const name=user?.user_metadata.userName
 const links=[
    {Name:<NavLink className="ho" to={'home'}>Home</NavLink> , icon:<FaHome />,href:'/'},
    {Name:<NavLink className="ho" to={'shop'}>Shop</NavLink>,icon:<FaShopify />,href:'/'
     
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

      <div className="flex items-center justify-between px-0 md:px-2.5  sticky  top-0 z-150 py-1  sm:py-5  bg-white w-full shadow-xl ">
        <div className="flex items-center  gap-2 md:gap-8 lg:gap-5">
            <div className="shrink-0"><img className="sm:w-30 w-20" src={panner} alt="" /></div>
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
  
          :("")}

           {user ?
          ( <div className="flex items-center gap-0 sm:gap-2.5   ">
            <button  disabled={pendingLogout} className=" sm:flex gap-1  sm:gap-3 items-center cursor-pointer text-lg mr-3 sm:text-2xl text-red-700 hidden " onClick={signout }><span className="text-sm sm:text-lg  text-gray-400">Exit</span>{pendingLogout?<Spinning/> :<GiExitDoor/>}</button>
            <div className="flex gap-2 sm:gap-5 items-center  text-(--main-color) text-[25px]">
              <div className="flex gap-2 mr-10 sm:mr-0">
  <span className="w-6 sm:w-9 sm:h-9 h-5  rounded-full text-sm bg-(--main-color)/15 text-(--main-color) flex items-center justify-center font-bold uppercase ">
    {user.user_metadata.userName.charAt(0)}
  </span>
  <div className="leading-tight">
    <p className="text-[8px] sm:text-[11px] text-gray-400">Welcome back</p>
    <p className="text-[10px] sm:text-sm font-semibold text-gray-800 max-w-28 truncate">{name}</p>
  </div>
</div>
                <NavLink className='heart bg-white text-lg sm:text-2xl' to={'wishlist'}><FaRegHeart/><div className="absolute text-sm bg-(--main-color) sm:py-0.5 sm:px-1.5 py-0.5 px-1 text-white sm:top-2 top-0 rounded-[50%] sm:right-22 right-10"><p className="sm:text-[11px] text-[7px]">{wishlist.length}</p></div></NavLink>
                <NavLink className='text-lg sm:text-2xl'  to={'cartpage'}><FiShoppingBag/><div className="absolute text-sm bg-(--main-color) py-0.5 px-1 sm:px-1.5 text-white sm:top-2  top-0 rounded-[50%] sm:right-12 right-4"><p className="sm:text-[11px] text-[7px]">{cart.length}</p></div></NavLink>
                <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="cursor-pointer text-sm sm:text-2xl text-[#b38a5b] "
      >
        <AiOutlineMenu />
      </button >

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
