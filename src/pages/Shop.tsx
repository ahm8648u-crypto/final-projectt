import ProductCard from "../component/ProductCard";
import ProductContinar from "../component/ProductContinar";
import Heading from "../re-use/Heading";

export default function Shop() {
  return (
    
    <div className="bg-gray-100 flex flex-col   justify-center pr-5 pl-4">
      <Heading title="Shop"/>
      <ProductContinar/>
    </div>
  )
}
