import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";

import hero from "../images/hero.png.png";
import prod1 from "../images/chairh.png";
import prod2 from "../images/clock.png";
import prod3 from "../images/bagh.png";

import { FaChevronRight } from "react-icons/fa";
import {
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/swiper-bundle.css";
import TwoCom from "../component/TwoCom";
import Slideproduct from "../component/Slideproduct";
import subabase from "../supabase/supabase";
import { products } from "../seeds/productData";
import { id } from "zod/v4/locales";

export default function Home() {
  const insertpro=async ()=>{
      const {error}=await subabase.from('products').insert(products)
      
    }
  return (
    
    <div>
      {/* <button onClick={insertpro}>ddddddddddddddddddddddddddd</button> */}

      <Link className="fixed z-50 right-2 sm:right-4 text-4xl top-12 sm:top-36 drop-shadow-gray-900  " to={'shop'}><FcShop className="animate-bounce"/></Link>

      <div
        className="
          relative
          w-full
          overflow-hidden
          h-[83vh]

          bg-center
          bg-cover

          px-5
          sm:px-8
          md:px-10
          lg:px-16
          xl:px-24
          2xl:px-[150px]

          py-10
          md:py-0
        "
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        <Swiper
          className="w-full h-full"
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"

          fadeEffect={{
            crossFade: true,
          }}

          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}

          loop={true}

          pagination={{
            clickable: true,
          }}

          speed={500}
        >


          <SwiperSlide>

            <div
              className="
                relative
                w-full
                h-full

                flex
                flex-col
                justify-center
                items-start

                md:flex-row
                md:items-center
                md:justify-between

                gap-8
                sm:gap-10
                md:gap-5
                lg:gap-10
                xl:gap-16
                2xl:gap-24
              "
            >


              <div
                className="
                  relative
                  z-20

                  w-full
                  md:w-[48%]
                  lg:w-[45%]
                  xl:w-[45%]
                "
              >

                <p
                  className="
                    my-3
                    sm:my-4

                    text-(--main-color)

                    text-[9px]
                    sm:text-[10px]
                    md:text-[11px]

                    bg-[#EBE5D9]

                    px-2
                    py-1

                    w-max
                  "
                >
                  NEW ARRIVAL...
                </p>


                <h1
                  className="
                    my-3
                    sm:my-4

                    font-semibold

                    text-[28px]
                    leading-[30px]

                    sm:text-[32px]
                    sm:leading-[35px]

                    md:text-[40px]
                    md:leading-[43px]

                    lg:text-[48px]
                    lg:leading-[51px]

                    xl:text-[65px]
                    xl:leading-[68px]

                    2xl:text-[80px]
                    2xl:leading-[88px]
                  "
                >
                  Elevate
                  <br />
                  Your Home
                  <br />
                  Aesthetics
                </h1>


                <p
                  className="
                    text-gray-400

                    text-[11px]
                    leading-[17px]

                    sm:text-xs
                    sm:leading-[18px]

                    md:text-sm
                    md:leading-[20px]

                    lg:text-sm

                    max-w-[430px]

                    my-3
                    sm:my-4
                  "
                >
                  A furniture e-commerce company operates in the digital
                  space, offering a wide range of furniture products for sale
                  through an online platform.
                </p>



                <div
                  className="
                    flex
                    items-center

                    gap-2
                    sm:gap-3
                    md:gap-3

                    my-4
                  "
                >

                  <Link
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1

                      bg-(--main-color)
                      text-white

                      border
                      border-(--main-color)

                      px-3
                      py-2

                      sm:px-4
                      sm:py-2.5

                      md:px-4
                      md:py-3

                      lg:px-5
                      lg:py-3

                      text-[9px]
                      sm:text-[10px]
                      md:text-xs

                      whitespace-nowrap

                      hover:bg-white
                      hover:text-(--main-color)

                      transition
                    "
                    to={"shop"}
                  >
                    BUY NOW
                    <FaChevronRight />
                  </Link>


                  <Link
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1

                      bg-white
                      text-(--main-color)

                      border
                      border-(--main-color)

                      px-3
                      py-2

                      sm:px-4
                      sm:py-2.5

                      md:px-4
                      md:py-3

                      lg:px-5
                      lg:py-3

                      text-[9px]
                      sm:text-[10px]
                      md:text-xs

                      whitespace-nowrap

                      hover:bg-(--main-color)
                      hover:text-white

                      transition
                    "
                    to={"shop"}
                  >
                    VIEW DETAILS
                    <FaChevronRight />
                  </Link>

                </div>

              </div>



              <div
                className="
                  relative
                  z-20

                  w-full

                  flex
                  justify-center
                  items-center

                  md:w-[50%]
                  lg:w-[50%]
                  xl:w-[48%]
                "
              >


                <div
                  className="
                    absolute

                    w-[170px]
                    h-[170px]

                    sm:w-[200px]
                    sm:h-[200px]

                    md:w-[260px]
                    md:h-[260px]

                    lg:w-[300px]
                    lg:h-[300px]

                    xl:w-[360px]
                    xl:h-[360px]

                    2xl:w-[420px]
                    2xl:h-[420px]

                    rounded-full

                    bg-[#D8C4A8]

                    z-0
                  "
                ></div>


                <img
                  src={prod2}
                  alt="chair"
                  className="
                  
                    relative
                    z-10

                    object-contain

                    w-[190px]

                    sm:w-[230px]

                    md:w-[300px]

                    lg:w-[350px]

                    xl:w-[430px]

                    2xl:w-[500px]

                    h-auto

                    shrink-0
                  "
                />

              </div>

            </div>

          </SwiperSlide>



          <SwiperSlide>

            <div
              className="
                relative
                w-full
                h-full

                flex
                flex-col
                justify-center
                items-start

                md:flex-row
                md:items-center
                md:justify-between

                gap-8
                sm:gap-10
                md:gap-5
                lg:gap-10
                xl:gap-16
                2xl:gap-24
              "
            >

              {/* TEXT */}

              <div
                className="
                  relative
                  z-20

                  w-full
                  md:w-[48%]
                  lg:w-[45%]
                  xl:w-[45%]
                "
              >

                <p
                  className="
                    my-3
                    sm:my-4
                    text-(--main-color)
                    text-[9px]
                    sm:text-[10px]
                    md:text-[11px]
                    bg-[#EBE5D9]
                    px-2
                    py-1
                    w-max
                  "
                >
                  NEW ARRIVAL...
                </p>


                <h1
                  className="
                    my-3
                    sm:my-4
                    font-semibold

                    text-[28px]
                    leading-[30px]

                    sm:text-[32px]
                    sm:leading-[35px]

                    md:text-[40px]
                    md:leading-[43px]

                    lg:text-[48px]
                    lg:leading-[51px]

                    xl:text-[65px]
                    xl:leading-[68px]

                    2xl:text-[80px]
                    2xl:leading-[88px]
                  "
                >
                  Elevate
                  <br />
                  Your Home
                  <br />
                  Aesthetics
                </h1>


                <p
                  className="
                    text-gray-400

                    text-[11px]
                    leading-[17px]

                    sm:text-xs
                    sm:leading-[18px]

                    md:text-sm
                    md:leading-[20px]

                    max-w-[430px]

                    my-3
                    sm:my-4
                  "
                >
                  A furniture e-commerce company operates in the digital
                  space, offering a wide range of furniture products for sale
                  through an online platform.
                </p>


                <div
                  className="
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    my-4
                  "
                >

                  <Link
                    className="
                     flex
                      items-center
                      justify-center
                      gap-1

                      bg-(--main-color)
                      text-white

                      border
                      border-(--main-color)

                      px-3
                      py-2

                      sm:px-4
                      sm:py-2.5

                      md:px-4
                      md:py-3

                      lg:px-5
                      lg:py-3

                      text-[9px]
                      sm:text-[10px]
                      md:text-xs

                      whitespace-nowrap

                      hover:bg-white
                      hover:text-(--main-color)

                      transition
                    "
                    to={"shop"}
                  >
                    BUY NOW
                    <FaChevronRight />
                  </Link>


                  <Link
                    className="
                      flex
                      items-center
                      gap-1

                      bg-white
                      text-(--main-color)

                      border
                      border-(--main-color)

                      px-3
                      py-2

                      sm:px-4
                      sm:py-2.5

                      text-[9px]
                      sm:text-[10px]

                      whitespace-nowrap

                      hover:bg-(--main-color)
                      hover:text-white
                    "
                    to={"shop"}
                  >
                    VIEW DETAILS
                    <FaChevronRight />
                  </Link>

                </div>

              </div>



              <div
                className="
                  relative
                  z-20

                  w-full

                  flex
                  justify-center
                  items-center

                  md:w-[50%]
                  lg:w-[50%]
                  xl:w-[48%]
                "
              >

                <div
                  className="
                    absolute

                    w-[170px]
                    h-[170px]

                    sm:w-[200px]
                    sm:h-[200px]

                    md:w-[260px]
                    md:h-[260px]

                    lg:w-[300px]
                    lg:h-[300px]

                    xl:w-[360px]
                    xl:h-[360px]

                    2xl:w-[420px]
                    2xl:h-[420px]

                    rounded-full

                    bg-[#D8C4A8]
                  "
                ></div>


                <img
                  src={prod1}
                  
                  alt="chair"
                  className="
                  
                    relative
                    mix-blend-multiply
                    z-10
                    object-contain

                    w-[190px]
                    sm:w-[230px]
                    md:w-[300px]
                    lg:w-[350px]
                    xl:w-[430px]
                    2xl:w-[500px]

                    h-auto
                    shrink-0
                  "
                />

              </div>

            </div>

          </SwiperSlide>



          <SwiperSlide>

            <div
              className="
                relative
                w-full
                h-full

                flex
                flex-col
                justify-center
                items-start

                md:flex-row
                md:items-center
                md:justify-between

                gap-8
                sm:gap-10
                md:gap-5
                lg:gap-10
                xl:gap-16
                2xl:gap-24
              "
            >

              {/* TEXT */}

              <div
                className="
                  relative
                  z-20

                  w-full
                  md:w-[48%]
                  lg:w-[45%]
                  xl:w-[45%]
                "
              >

                <p
                  className="
                    my-3
                    sm:my-4
                    text-(--main-color)
                    text-[9px]
                    sm:text-[10px]
                    md:text-[11px]
                    bg-[#EBE5D9]
                    px-2
                    py-1
                    w-max
                  "
                >
                  NEW ARRIVAL...
                </p>


                <h1
                  className="
                    my-3
                    sm:my-4
                    font-semibold

                    text-[28px]
                    leading-[30px]

                    sm:text-[32px]
                    sm:leading-[35px]

                    md:text-[40px]
                    md:leading-[43px]

                    lg:text-[48px]
                    lg:leading-[51px]

                    xl:text-[65px]
                    xl:leading-[68px]

                    2xl:text-[80px]
                    2xl:leading-[88px]
                  "
                >
                  Elevate
                  <br />
                  Your Home
                  <br />
                  Aesthetics
                </h1>


                <p
                  className="
                    text-gray-400

                    text-[11px]
                    leading-[17px]

                    sm:text-xs
                    sm:leading-[18px]

                    md:text-sm
                    md:leading-[20px]

                    max-w-[430px]

                    my-3
                    sm:my-4
                  "
                >
                  A furniture e-commerce company operates in the digital
                  space, offering a wide range of furniture products for sale
                  through an online platform.
                </p>


                <div
                  className="
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    my-4
                  "
                >

                  <Link
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1

                      bg-(--main-color)
                      text-white

                      border
                      border-(--main-color)

                      px-3
                      py-2

                      sm:px-4
                      sm:py-2.5

                      md:px-4
                      md:py-3

                      lg:px-5
                      lg:py-3

                      text-[9px]
                      sm:text-[10px]
                      md:text-xs

                      whitespace-nowrap

                      hover:bg-white
                      hover:text-(--main-color)

                      transition
                    "
                    to={"shop"}
                  >
                    BUY NOW
                    <FaChevronRight />
                  </Link>


                  <Link
                    className="
                      flex
                      items-center
                      gap-1

                      bg-white
                      text-(--main-color)

                      border
                      border-(--main-color)

                      px-3
                      py-2

                      sm:px-4
                      sm:py-2.5

                      text-[9px]
                      sm:text-[10px]

                      whitespace-nowrap

                      hover:bg-(--main-color)
                      hover:text-white
                    "
                    to={"shop"}
                  >
                    VIEW DETAILS
                    <FaChevronRight />
                  </Link>

                </div>

              </div>



              <div
                className="
                  relative
                  z-20

                  w-full

                  flex
                  justify-center
                  items-center

                  md:w-[50%]
                  lg:w-[50%]
                  xl:w-[48%]
                "
              >

                <div
                  className="
                    absolute

                    w-[170px]
                    h-[170px]

                    sm:w-[200px]
                    sm:h-[200px]

                    md:w-[260px]
                    md:h-[260px]

                    lg:w-[300px]
                    lg:h-[300px]

                    xl:w-[360px]
                    xl:h-[360px]

                    2xl:w-[420px]
                    2xl:h-[420px]

                    rounded-full

                    bg-[#D8C4A8]
                  "
                ></div>


                <img
                  src={prod3}
                  alt="chair"
                  className="
                    relative
                    z-10
                    object-contain

                    w-[190px]
                    sm:w-[230px]
                    md:w-[300px]
                    lg:w-[350px]
                    xl:w-[430px]
                    2xl:w-[500px]

                    h-auto
                    shrink-0
                  "
                />

              </div>

            </div>

          </SwiperSlide>

        </Swiper>

      </div>
     <TwoCom/>
          <Slideproduct />

    </div>
    
  );
}
