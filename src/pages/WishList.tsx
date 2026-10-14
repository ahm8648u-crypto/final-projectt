import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import Heading from "../re-use/Heading";
import useWishlist from "../zustand/wishListStore";
import ProductSkelton from "../skelton/productSkelton";
import ProductCard from "../component/ProductCard";
import type { Tproduct } from "../zustand/productstore";

export default function WishList() {
  const wishlist = useWishlist((s) => s.wishlist);
  const wishlisterr = useWishlist((s) => s.wishlistErr);
  const wishlistloading = useWishlist((s) => s.loadingwishlist);
  const wishproduct = wishlist
    .map((el) => el.products)
    .filter((p): p is Tproduct => p !== null);

  if (wishlisterr) {
    return (
      <div className="my-50 h-full text-center w-full bg-red-100 text-red-800 py-3 rounded shadow font-bold">
        Some Thing Went Error
      </div>
    );
  }

  
  if (!wishlistloading && wishproduct.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <IoMdHeartEmpty className="text-6xl text-gray-300" />
        <p className="text-2xl font-bold">Your wishlist is empty</p>
        <p className="text-gray-500">
          Save products you love and they will show up here.
        </p>
        <NavLink
          to="/shop"
          className="rounded-lg bg-(--main-color) px-6 py-2 text-white transition hover:opacity-90"
        >
          Continue shopping
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <Heading title="WishList" cat />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-auto">
        {wishlistloading ? (
          <ProductSkelton count={4} />
        ) : (
          wishproduct.map((el) => <ProductCard {...el} key={el.id} />)
        )}
      </div>
    </>
  );
}