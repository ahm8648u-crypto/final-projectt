import {create} from 'zustand'
import subabase from '../supabase/supabase';
import { toast } from 'react-toastify';
import type { Tproduct } from './productstore';

type Tcart = {
  id: number;
  created_at: Date;
  product_id: number;
  user_id: number;
  quantity: number;
  products:Tproduct
};

type TCartstore = {
  cart: Tcart[];
  loadingCart: boolean;
  cartErr: null | string;
  loadingInsert: null | number;
  loadingDelete: null | number;
  addCart: (proId: number) => Promise<void>;
  removeCart  : (proId: number) => Promise<void>;
  getCart : () => Promise<void>;
  toggleCart  : (proId: number) =>void
  clearCart ?:()=>void
  updateQuantity: (proId: number, qty: number) => Promise<void>;
};



const useCart=create<TCartstore>((set,get)=>({
    cart:[],
    loadingCart:false,
    cartErr:null,
    loadingInsert:null,
    loadingDelete:null,
    addCart:async(proId)=>{
        set({loadingInsert:proId})
        const {data,error}=await subabase.from('cart').insert({product_id:proId}).select('*,products(*)').single()
        if(error){
            set({loadingInsert:null})
            toast.error('Error Insert Product...!')
            return
        }
        toast.success('Success Insert')

        set((state)=>({
            cart:[...state.cart,data],
            loadingInsert:null
            
        }))

    },
    removeCart:async(proId)=>{
    set({loadingDelete:proId})
    const {data,error}=await subabase.from('cart').delete().select('*').eq('product_id',proId)
    if(error)
    {
        set({loadingDelete:null})
            toast.error('Error Insert Product...!')
            return
        
    }
    set((state) => ({
  loadingDelete: null,
  cart: state.cart.filter((el) => el.product_id !== proId),
}));
       toast.success('delete success')

    },
    toggleCart:(proId)=>{
const {cart,addCart,removeCart}=get()
    const isInsert=cart.some((el=>el.product_id ===proId))
      if (isInsert) {
    return removeCart(proId)
    
  }else{
    return addCart(proId)
  }
    },
    getCart:async()=>{
set({loadingCart:true})
    const {data,error}=await subabase.from('cart')
    .select('* ,products(*)')
    .order('created_at',{ascending:true})
    if(error){
       toast.error(error.message);
set({ loadingCart: false, cartErr: error.message });
        return
    }
    
        set({loadingCart:false,
            cartErr:null,
            cart:data
        })
    } ,
    updateQuantity: async (proId, qty) => {
  const item = get().cart.find(el => el.product_id === proId)
  if (!item) return

  const stock = item.products?.stock ?? Infinity
  if (qty < 1 || qty > stock) return

  const oldQty = item.quantity

  // تحديث فوري في الـ UI
  set(state => ({
    cart: state.cart.map(el =>
      el.product_id === proId ? { ...el, quantity: qty } : el
    ),
  }))

  const { data, error } = await subabase
    .from('cart')
    .update({ quantity: qty })
    .eq('product_id', proId)
    .select('id')

  // لو فشل أو متعدّلش حاجة، ارجع للقيمة القديمة
  if (error || !data || data.length === 0) {
    set(state => ({
      cart: state.cart.map(el =>
        el.product_id === proId ? { ...el, quantity: oldQty } : el
      ),
    }))
    toast.error(error?.message ?? 'Quantity not updated')
  }
},









}));export default useCart;