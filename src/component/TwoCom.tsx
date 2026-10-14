import { TbTruckDelivery } from "react-icons/tb";

import { Link } from "react-router-dom";
import { FaMoneyCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import left from '../images/left.png.jpeg'
import right from '../images/right.png.jpeg'


export default function TwoCom() {
  return (
    <>
    <div className="flex flex-col gap-20 items-center justify-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-13">
            <div className="flex items-center gap-3 "><div className="text-7xl text-(--main-color)"><TbTruckDelivery/></div> <p className="font-black">Free Delivery <br /><span className="text-gray-400 text-sm">Free shipping on all order</span></p></div>
            <div className="flex items-center gap-3 "><div className="text-5xl text-(--main-color)"><FaMoneyCheck/></div> <p className="font-black">Money Return <br /><span className="text-gray-400 text-sm">Back guarantee under 7 day</span></p></div>
            <div className="flex items-center gap-3 "><div className="text-5xl text-(--main-color)"><BiSupport/></div> <p className="font-black">Online Support 24/7 <br /><span className="text-gray-400 text-sm">Support online 24 hours a day</span></p></div>
            <div className="flex items-center gap-3 "><div className="text-5xl text-(--main-color)"><FaHandHoldingHeart/></div> <p className="font-black">Reliable <br /><span className="text-gray-400 text-sm">Trusted by 1000+ brands</span></p></div>
        </div>

        <div className="grid    gap-7 grid-cols-1 lg:grid-cols-2 items-center">
          <div className=" default:w-70 flex sm:flex-row flex-col px- sm:px-4 h-full bg-(--card-color)  items-center "><div className="flex flex-col gap-5" ><p className="text-(--main-color)">GET 30% OFF</p><p className="text-xl sm:text-3xl font-bold">wicker hanging <br />
          chairs</p> <Link className="hover:opacity-70 cursor-pointer px-3 sm:px-10 w-max text-white font-bold py-2 sm:py-5 bg-(--main-color)" to={''}>Buy Now</Link></div><img className="" src={left} alt="" /> </div>

 <div className="flex  sm:flex-row flex-col  px-4 bg-(--card-color)  items-center "><div className="flex flex-col gap-5" ><p className="text-(--main-color)">GET 15% OFF</p><p className="text-3xl font-bold">Brasslegged <br />
Armchair</p> <Link className="hover:opacity-70 cursor-pointer px-5 sm:px-10 w-max text-white font-bold py-2 sm:py-5 bg-(--main-color)" to={''}>Buy Now</Link></div><img src={right} alt="" /> </div>
        </div>
    </div>
    </>
  )
}
