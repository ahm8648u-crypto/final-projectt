import { useEffect } from "react";
import useProduct from "../zustand/productstore";
import ProductCard from "./ProductCard";
import ProductSkelton from "../skelton/productSkelton";
import Pagination from "@mui/material/Pagination";
export default function ProductContinar() {
    const getproduct =useProduct(s=>s.getProduct)
    const products =useProduct(s=>s.products)
    const loadingProduct =useProduct(s=>s.loadingProduct)
    const totalPages =useProduct(s=>s.totalPages)
    const page =useProduct(s=>s.page)
    const changePage =useProduct(s=>s.changePage)
    const productErr =useProduct(s=>s.productErr)


    useEffect(()=>{
getproduct()
    },[getproduct,page])
    if(productErr){
        return <div className="my-50 h-full text-center w-full bg-red-100 text-red-800 py-3 rounded shadow font-bold">Some Thing Went Error</div>
    }
  return (
    <div className="flex items-center justify-center flex-col">
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 mx-auto  
      ">
      {loadingProduct?
      <ProductSkelton/>
      :
          
      products.map((el)=><ProductCard {...el} key={el.id}/>)
      
      }
    
</div> 
<div className="my-15"><Pagination onChange={(_,value)=>changePage(value)} page={page}  count={totalPages} color="primary" />
</div>
</div> )
}
