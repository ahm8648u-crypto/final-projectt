import { create } from "zustand";
import supabase from "../supabase/supabase";
import { toast } from "react-toastify";
import type { Tproduct } from "./productstore";

type Twishlist = {
  id: number;
  created_at: Date;
  product_id: number;
  user_id: number;
  products:Tproduct |null
};

type Twishliststore = {
  wishlist: Twishlist[];
  loadingwishlist: boolean;
  wishlistErr: null | string;
  loadingInsert: null | number;
  loadingDelete: null | number;
  addWishList: (proId: number) => Promise<void>;
  removeWishList : (proId: number) => Promise<void>;
  getWishList : () => Promise<void>;
  toggleWishList : (proId: number) =>void
  clearwishlist:()=>void
};

const useWishlist = create<Twishliststore>((set, get) => ({
  wishlist: [],
  loadingwishlist: false,
  wishlistErr: null,
  loadingInsert: null,
  loadingDelete: null,

 

  addWishList: async (proId) => {
    set({ loadingInsert: proId });
    await new Promise(res=>setTimeout(res,100))
    const { data, error } = await supabase
      .from("wishlist")
      .insert({ product_id: proId })
      .select("* ,products(*)")
      .single();

    if (error) {
      set({ loadingInsert: null });
      toast.error('LOGIN FIRST...!');
      return;
    }
   toast.success('Insert success')
    set((state) => ({
      wishlist: [...state.wishlist, data],
      loadingInsert: null,
    }));
  },
  removeWishList:async(proId)=>{
    set({loadingDelete:proId})
    await new Promise(res=>setTimeout(res,100))

    const { data, error } = await supabase
      .from("wishlist")
      .delete()
      .select("*")
      .eq('product_id', proId );

      if (error) {
      set({ loadingDelete: null });
      toast.error(error.message);
      return;
    }
    set((state) => ({
  loadingDelete: null,
  wishlist: state.wishlist.filter((el) => el.product_id !== proId),
}));
       toast.success('delete success')

  },
  toggleWishList:(proId)=>{
   
    const {wishlist,addWishList,removeWishList}=get()
    const isInsert=wishlist.some((el=>el.product_id ===proId))
      if (isInsert) {
    return removeWishList(proId)
    
  }else{
    return addWishList(proId)
  }
  },
  getWishList:async()=>{
    set({loadingwishlist:true})
    const {data,error}=await supabase.from('wishlist')
    .select('* ,products(*)')
    .order('created_at',{ascending:true})
    if(error){
       toast.error(error.message);
set({ loadingwishlist: false, wishlistErr: error.message });
        return
    }
    
        set({loadingwishlist:false,
            wishlistErr:null,
            wishlist:data
        })


    
  
      
  },
  clearwishlist:()=>{
    set({wishlist:[]})
  }

  

 

  
}));

export default useWishlist;