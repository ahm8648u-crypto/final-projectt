import footImage from '../images/logo-light.png.svg'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import useAuth from '../zustand/authData';



export default function Footer() {
      const logoutHandel = useAuth(s => s.logoutHandel)

  const user= useAuth(s=>s.user)
  return (
    <>
    <div className="w-full bg-(--dark-color) block md:flex justify-center gap-10 lg:gap-30 ">
      <div className='flex sm:flex-row gap-20 lg:gap-40 justify-center py-20 w-max  flex-col '>
      <div className=''>
        <img className='my-4' src={footImage} alt="" />
        <p className='my-8  text-gray-400'>It helps designers plan out where the <br /> content will sit, the content to be written <br /> and approved.</p>
        <div className='flex gap-4'>
          
          
<a
className='hover:bg-(--main-color) hover:text-white duration-300 cursor-pointer p-3 rounded-[50%] bg-white text-black w-max'
  href="https://www.facebook.com/share/1L1Lu4RoEe/"
  target="_blank"
  aria-label="Facebook"
>
  <FaFacebookF />
</a>          
          
           <div className='hover:bg-(--main-color) hover:text-white duration-300 cursor-pointer p-3 rounded-[50%] bg-white text-black w-max'>
          <IoLogoTwitter/>
          </div>
          <div className='hover:bg-(--main-color) hover:text-white duration-300 cursor-pointer p-3 rounded-[50%] bg-white text-black w-max'>
          <TfiLinkedin/>
          </div>
           <div className='hover:bg-(--main-color) hover:text-white duration-300 cursor-pointer p-3 rounded-[50%] bg-white text-black w-max'>
          <FaInstagram/>
          </div>
        </div>
      </div>
      
      <div>
        <p className='text-white text-xl my-4'>Services</p>
        <div className='text-gray-400 flex flex-col gap-3'>
{user ? (
  <button
    onClick={logoutHandel}
    className="hover:text-(--main-color) text-red-600"
  >
    LogOut
  </button>
) : (
  <Link
    to="/login"
    className="hover:text-(--main-color)"
  >
    Log In
  </Link>
)}        <Link className='hover:text-(--main-color)' to={'wishlist'}>Wishlist</Link>
        
        <Link className='hover:text-(--main-color)' to={'cartpage'}>Shopping FAQs</Link>
        </div>
      </div>
  </div>
        <div className='flex md:flex-row gap-20 lg:gap-40 justify-center  py-20 w-max  flex-col'>

      <div>
        <p className='text-white text-xl my-4'>Company</p>
        <div className='text-gray-400 flex flex-col gap-3'>
        <Link className='hover:text-(--main-color)' to={'home'}>Home</Link>
        <Link className='hover:text-(--main-color)' to={'shop'}>Shop</Link>
        <Link className='hover:text-(--main-color)' to={'products'}>products</Link>
       
        </div>
      </div>
      <div className=' flex flex-col gap-4'>
        <p className='text-white text-xl my-4'>Contact</p>
        <p className='text-gray-400'>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>

        <p className='flex items-center gap-2 text-gray-300'><div className='p-4 rounded-[50%] bg-(--main-color) text-white w-max'><IoLocationSharp/></div> 711-2880 Nulla St.</p>
        <p className='flex items-center gap-2 text-gray-300'><div className='p-4 rounded-[50%] bg-(--main-color) text-white w-max'><IoCallSharp/></div>+964 742 44 763V</p>

</div>
</div>

</div>
      

    
    </>
  )
}
