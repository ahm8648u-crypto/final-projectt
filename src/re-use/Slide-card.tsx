import type { ReactNode } from "react";
import type { Tproduct } from "../zustand/productstore";
import useWishlist from "../zustand/wishListStore";
import useCart from "../zustand/CartStore";

type Tcards = { icons: ReactNode[]; stars: ReactNode };
type marginprops = Tproduct & Tcards;

export default function Slidecard({ icons, stars, image, price, title ,id}: marginprops) {
   const wishlist=useWishlist(s=>s.wishlist)
    const togglecart=useCart(s=>s.toggleCart)

    const isLiked=wishlist.some(el=>el.product_id==id)
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-(--main-color) hover:shadow-xl">
      <div className="relative flex h-56 items-center justify-center p-4">
        <img className="h-44 object-contain " src={image} alt={title} />

        <div className="absolute right-3 top-3 flex translate-x-14 flex-col gap-2 transition-transform duration-300 group-hover:translate-x-0 max-md:translate-x-0">
          {icons?.map((icon, i) => (
            

            <button
              key={i}
              
              className="grid size-9 cursor-pointer place-items-center rounded-md bg-(--main-color) text-white transition hover:scale-110"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-bold ">{title}</p>
          <p className="font-semibold text-(--main-color)">${price}</p>
        </div>
        <div className="mt-2 flex gap-1 text-sm text-amber-400">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{stars}</span>
          ))}
        </div>
      </div>
    </div>
  );
}