import Heading from "../re-use/Heading";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";

import useCart from "../zustand/CartStore";
import ProductSkelton from "../skelton/productSkelton";
import OrderCart from "../component/OrderCart";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Placingorder() {
    const [form, setForm] = useState({
  fullName: "",
  phone: "",
  city: "",
  area: "",
  address: "",
  notes: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => setForm({ ...form, [e.target.name]: e.target.value });
    
    const loadingcart =useCart(s=>s.loadingCart)
        const cart =useCart(s=>s.cart)
        const handlePlaceOrder=()=>{
            if (!form.fullName || !form.phone || !form.city || !form.address) {
    toast.error("Please fill all required fields");
    return;
  }
 const whatsup="201205186077"
        const message=` السلام عليكم ورحمة الله وبركاته
           ${
            cart.map((item)=>{
                const pro=item.products
                
            return   ` 
            *بيانات العميل*
الاسم: ${form.fullName}
الموبايل: ${form.phone}
المدينة: ${form.city}
المنطقة: ${form.area}
العنوان: ${form.address}
ملاحظات: ${form.notes || "لا يوجد"}

*الطلب*
${pro.image}
${pro.title}
سعر المنتج :${pro.price}
الكميه :${item.quantity}



الشحن: EGP 50
*الإجمالي: EGP ${total + 50}*
طريقة الدفع: الدفع عند الاستلام`


            }).join('\n')
           }  
         EG ${total+50}
        
        
        `
        const whatsupurl=`https://wa.me/${whatsup}?text=${encodeURIComponent(message)}`
        window.open(whatsupurl,'_blank')

        }
       

const total = cart.reduce((sum, el) => {
  const p = el.products
  const finalPrice = p.price - (p.price * p.discount / 100)
  const pricedelivery =finalPrice+50
  return sum + finalPrice * el.quantity

}, 0)
       const cartproduct=cart.map((el)=>el.products)
  return (
    <>
    <Heading title="Placing" ord/>
    <div className="om w-max p-5 rounded-2xl mx-auto flex flex-col md:flex-row gap-4 m-10">
        {/* الجزء الشمال */}
        <div>
            <div className="w-90 p-5 bg-white rounded-2xl">
  <p className="flex items-center gap-3 text-xl">
    <TbTruckDelivery className="text-(--main-color)" />Shipping info
  </p>

  <div className="flex flex-col mt-2">
    <label className="text-(--main-color)" htmlFor="fullName">FullName</label>
    <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange}
      className="border border-gray-200 p-1" type="text" placeholder="Your Name" />
  </div>

  <div className="flex flex-col mt-2">
    <label className="text-(--main-color)" htmlFor="phone">Phone</label>
    <input id="phone" name="phone" value={form.phone} onChange={handleChange}
      className="border border-gray-200 p-1" type="text" placeholder="Your Phone" />
  </div>

  <div className="flex gap-4 mt-2">
    <div className="flex flex-col w-38">
      <label className="text-(--main-color)" htmlFor="city">City</label>
      <input id="city" name="city" value={form.city} onChange={handleChange}
        className="border border-gray-200 p-1" type="text" placeholder="Your City" />
    </div>
    <div className="flex flex-col w-38">
      <label className="text-(--main-color)" htmlFor="area">Area</label>
      <input id="area" name="area" value={form.area} onChange={handleChange}
        className="border border-gray-200 p-1" type="text" placeholder="Your Area" />
    </div>
  </div>

  <div className="flex flex-col mt-2">
    <label className="text-(--main-color)" htmlFor="address">Address</label>
    <input id="address" name="address" value={form.address} onChange={handleChange}
      className="border border-gray-200 p-1" type="text" placeholder="Street,Building,Floor.." />
  </div>

  <div className="flex flex-col mt-2">
    <label className="text-(--main-color)" htmlFor="notes">Notes (optional)</label>
    <textarea id="notes" name="notes" value={form.notes} onChange={handleChange}
      className="border border-gray-200 h-20 p-1" placeholder="Leave At The Door...." />
  </div>
</div>
        </div>
        {/* الجزء اليمين */}
        <div className="w-90 p-5 bg-white rounded-2xl flex flex-col ">
            <p className="flex gap-2"><FaClipboardList className="text-(--main-color)"/>Order summary</p>
            <div className="grid grid-rows-1 gap-2 justify-center  p-4 
              ">
              {loadingcart?
              <ProductSkelton />
              :
                  
              cartproduct.map((el)=><OrderCart {...el} key={el.id}/>)
              
              }
            <hr className="text-gray-300"/>
           

        </div> 
        <div className=" flex flex-col gap-3 py-3 ">
                <p className="flex justify-between">Subtotal: <span>${total}</span>  </p>
                <p className="flex justify-between">Delivery:   <span>$50</span></p>
            </div>
            <div>
                        <hr className="text-gray-300"/>
                        <p className="text-green-700 my-2  flex justify-between"> <span className="text-black font-bold">Total:</span>${total+50}</p>
                        <div className="border px-20 py-1 rounded-2xl border-gray-300 mt-2 text-center text-sm hover:bg-green-500 hover:text-white"><NavLink className='flex items-center' onClick={handlePlaceOrder} to={''}><IoIosCheckmark className="text-2xl"/>Placing order</NavLink></div>
                        </div>
                        

     
        </div>
        
        
    </div>

    </>
  )
}