import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import type { Tproduct } from "../zustand/productstore";
import ImageProductHandel from "./ImageProductHandel";
import useCart from "../zustand/CartStore";

export default function CardProduct({ image, title, price, discount, id, stock }: Tproduct) {
  const finalPrice = price - (price * discount) / 100;
  const deletecart = useCart((s) => s.removeCart);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const qty = useCart((s) => s.cart.find((el) => el.product_id === id)?.quantity ?? 1);

  const dec = () => qty > 1 && updateQuantity(id, qty - 1);
  const inc = () => qty < stock && updateQuantity(id, qty + 1);

  return (
    <div className="relative w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <button
        onClick={() => deletecart(id)}
        aria-label="Remove"
        className="absolute right-2 top-2 z-10 grid size-8 cursor-pointer place-items-center rounded-full bg-white text-lg text-gray-500 shadow transition hover:text-red-600"
      >
        <MdDelete />
      </button>

      <div className="flex h-40 items-center justify-center bg-gray-50 p-3">
<img
    src={image}
    alt={title}
    className="h-full w-full object-contain mix-blend-multiply"
  />      </div>

      <div className="p-4 text-center">
        <p className="truncate font-bold">{title}</p>
        <p className="font-semibold text-(--main-color)">${finalPrice}</p>

        <div className="mt-3 inline-flex items-center gap-3 rounded-full bg-gray-100 p-1">
          <button
            onClick={dec}
            className="grid size-8 cursor-pointer place-items-center rounded-full bg-white transition hover:bg-(--main-color) hover:text-white"
          >
            <TiMinus />
          </button>
          <span className="min-w-5 text-center text-sm font-medium">{qty}</span>
          <button
            onClick={inc}
            className="grid size-8 cursor-pointer place-items-center rounded-full bg-white transition hover:bg-(--main-color) hover:text-white"
          >
            <FiPlus />
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Total: ${(finalPrice * qty).toFixed(2)}
        </p>
      </div>
    </div>
  );
}