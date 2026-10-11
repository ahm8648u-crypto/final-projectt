import { div, p } from "motion/react-client"

type Ttitle={
    title:string,
    cat?:boolean
    ord?:boolean
}
export default function Heading({title,cat,ord}:Ttitle) {
  return (
      <div className="text-center  justify-center text-xl mb-5 sm:text-2xl font-black mt-12 "><p className="text-(--main-color)"><span className="bg-(--main-color) p-3 rounded text-white">
        {title}</span> {cat?'store':ord?'Order':'Now'}</p></div>
  )
}
