import Slidecard from "../re-use/Slide-card";
import prod1 from "../images/product-slide.png";
import prod2 from "../images/product2.png";
import prod3 from "../images/product3.png";
import prod5 from "../images/product-hover7.png";
import prod4 from "../images/product-slide2.png";
import { FaRegStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import Tcards from '../re-use/Slide-card'
import { IoIosArrowForward } from "react-icons/io";
import {
  Autoplay,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/swiper-bundle.css";


import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import useProduct, { type Tproduct } from "../zustand/productstore";
import { useEffect } from "react";
import useCart from "../zustand/CartStore";
import useWishlist from "../zustand/wishListStore";

export default function Slideproduct() {
  
    const togglewishlist=useWishlist(s=>s.toggleWishList)

        const togglecart=useCart(s=>s.toggleCart)

    const products =useProduct(s=>s.products)
        const getproduct =useProduct(s=>s.getProduct)
  useEffect(()=>{
getproduct()
    },[getproduct])






  return (
    <>

    <div className="flex  justify-between px-70 relative top-[430px]  z-30  ">
        <div className="arrow-l  p-3 bg-gray-100 hover:bg-(--main-color) rounded-full text-black cursor-pointer hover:text-white"><IoIosArrowBack/></div>
        <div className="arrow-2  p-3 bg-gray-100 hover:bg-(--main-color) rounded-full text-black cursor-pointer hover:text-white"><IoIosArrowForward/></div>
    </div>
    

    <div className="flex flex-col items-center gap-17 ">
        
      <div className="flex flex-col items-center gap-4">
        <p className="text-[13px] text-(--main-color) bg-gray-100 px-3 py-1">
          TOP SALE
        </p>

        <p className="text-5xl font-bold">
          Featured Product
        </p>
      </div>
     

 <div className="w-[69%] m-20">
  <Swiper
  className="w-full h-full"
  modules={[Navigation, Autoplay]}

  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter:true,
  }}

  loop={true}
  speed={1500}
  spaceBetween={30}

  navigation={{
    nextEl: ".arrow-2",
    prevEl: ".arrow-l",
  }}

  breakpoints={{
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  }}
>
  {products.map((product) => (
  <SwiperSlide key={product.id}>
    <Slidecard
      {...product}
      stars={<FaRegStar />}
      icons={[
        <FiShoppingBag onClick={() => togglecart(product.id)} />,
        <MdOutlineRemoveRedEye />,
        <FaRegHeart onClick={() => togglewishlist(product.id)} />,
      ]}
    />
  </SwiperSlide>
))}
</Swiper>

      </div>
    </div>
    
    </>
  );
}