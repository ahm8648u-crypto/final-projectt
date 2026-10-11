import ProductCategory from "../component/ProductCategory";
import Heading from "../re-use/Heading";
import { useParams } from "react-router-dom";
export default function Productpage() {
    const {name,id}=useParams()
    const catname=name as string
    const catId=id as string
  return (
    <>
    <Heading title={catname} cat/>
    <ProductCategory id={catId}/>
    </>
  )
}
