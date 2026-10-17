import { NavLink,Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import useCart from "../zustand/CartStore";
import CardProduct from "../component/CartProduct";

export default function CartPage() {
  const cart = useCart((s) => s.cart);

  const items = cart.filter((el) => el.products);
  const count = items.reduce((sum, el) => sum + el.quantity, 0);
  const total = items.reduce((sum, el) => {
    const p = el.products!;
    const finalPrice = p.price - (p.price * p.discount) / 100;
    return sum + finalPrice * el.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <IoMdCart className="text-6xl text-gray-300" />
        <p className="text-2xl font-bold">Your cart is empty</p>
        <p className="text-gray-500">Add some products and they will show up here.</p>
        <NavLink
          to="shop"
          className="rounded-lg bg-(--main-color) px-6 py-2 text-white transition hover:opacity-90"
        >
          Continue shopping
        </NavLink>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex items-end justify-between">
        <h1 className="text-3xl font-bold">
          <span className="rounded bg-(--main-color) px-3 py-1 text-white">Cart</span>{" "}
          <span className="text-(--main-color)">Now</span>
        </h1>
        <p className="text-green-700 mx-4 animate-bounce">{items.length} products</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((el) => (
            <CardProduct key={el.id} {...el.products!} />
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
          <p className="mb-4 text-xl font-bold">Order summary</p>

          <div className="flex justify-between py-2 text-gray-600">
            <span>Items</span>
            <span>{count}</span>
          </div>
          <div className="flex justify-between border-t border-gray-100 py-3 text-lg font-bold">
            <span>Total</span>
            <span className="text-(--main-color)">${total.toFixed(2)}</span>
          </div>

          <Link to={'placingorder'} className="block text-center mt-2 w-full cursor-pointer rounded-lg bg-(--main-color) py-3 font-semibold text-white transition hover:opacity-90">
            Check out
          </Link>
        </aside>
      </div>
    </div>
  );
}