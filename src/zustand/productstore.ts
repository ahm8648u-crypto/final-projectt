import { toast } from 'react-toastify'
import {create} from 'zustand'
import subabase from '../supabase/supabase'



type Tcategory={
    id:number,
    name :string
}
export type Tproduct={
    id:number,
    title:string,
    image:string,
    description:string,
    price:number,
    discount:number,
    stock:number,
    category_id:number
}
type Tproducts={
    categories:Tcategory[],
    loadingCategory:boolean,

    products:Tproduct[],
    loadingProduct:boolean,
    productErr:null |string,

    productPerPage:number,
    totalPages:number,
    page:number,
    
    changePage:(value:number)=>void
    getProduct:(catId?:number)=>Promise<void>
    getCategory :()=>Promise<void>
}
const useProduct=create<Tproducts>((set , get)=>({
categories:[],
loadingCategory:false,
products:[],
loadingProduct:false,
productErr:null,
productPerPage:8,
totalPages:1,
page:1,
getProduct:async(catId)=>{
    set({loadingProduct:true})
    const {productPerPage,page}=get()
    const from=(page-1)*productPerPage
    const to=from+productPerPage-1
    
    let query= subabase.from('products').select('*',{count:'exact'}).range(from,to)
    if(catId){
        query=query.eq('category_id',catId)
    }
    const {error,data,count}=await query
    if(error){
        set({loadingProduct:false
            ,productErr:error.message
        
        })
        return
    }
    set({loadingProduct:false,products:data,totalPages:Math.ceil((count??0)/productPerPage)})
                                                 
},
getCategory:async()=>{
    set({loadingCategory:true})
    const {data,error}= await subabase.from('categories').select('*')
    if(error){
            set({loadingCategory:false})
        toast.error('error!!!')
        return
    }
    set({loadingCategory:false,categories:data})
},
    changePage:(value)=>{set({page:value})}        



}))
export default useProduct