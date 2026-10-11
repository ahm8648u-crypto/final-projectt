import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../zustand/authData";
import useProduct from "../zustand/productstore";
import Spinning from "../re-use/spinning";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import useWishlist from "../zustand/wishListStore";

const links = [
  { name: "Home", to: "/home", icon: <FaHome /> },
  { name: "Shop", to: "/shop", icon: <CiShop /> },
];

type Props = { open: boolean; onClose: () => void };

export default function Onpages({ open, onClose }: Props) {
    const logoutHandel = useAuth(s => s.logoutHandel)
    const clearwishlist=useWishlist(s=>s.clearwishlist)


    const signout= async()=>{
       await logoutHandel()
       clearwishlist()

    }

  const user = useAuth((s) => s.user);
  const categories = useProduct((s) => s.categories);
  const getCategory = useProduct((s) => s.getCategory);
  const loadingCategory = useProduct((s) => s.loadingCategory);
  const [showCats, setShowCats] = useState(false);

  useEffect(() => {
    if (!categories.length) getCategory();
  }, []);

  return (
    // الضغط على الخلفية المغبّشة يقفل اللوحة
    <div
      onClick={onClose}
      className={`fixed left-0 top-0 z-[100] h-screen w-full bg-black/35 backdrop-blur-sm transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* stopPropagation: الضغط جوه اللوحة البيضاء ما يقفلهاش */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 h-full w-72 max-w-[85vw] bg-white text-stone-900 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mx-6 mt-8">
          <p className="text-sm text-gray-400">welcome</p>
          <p>{user?.user_metadata?.userName}</p>
        </div>

        <ul className="mt-6 flex flex-col px-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-lg transition ${
                    isActive
                      ? "bg-[#b38a5b] text-white"
                      : "hover:bg-[#b38a5b]/15"
                  }`
                }
              >
                {l.icon} {l.name}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              onClick={() => setShowCats((v) => !v)}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg transition hover:bg-[#b38a5b]/15"
            >
              <MdProductionQuantityLimits /> Products
              <span className="ml-auto text-sm">{showCats ? "▲" : "▼"}</span>
            </button>

            {showCats && (
              <div className="ml-8 border-l border-stone-200 pl-3">
                {loadingCategory ? (
                  <Spinning />
                ) : (
                  categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/shop/${cat.name}/${cat.id}`}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-2 text-stone-700 transition hover:bg-[#b38a5b]/15"
                    >
                      {cat.name}
                    </Link>
                  ))
                )}
              </div>
            )}
          </li>
        </ul>
              <div className="absolute bottom-4 border-black border-t w-full  text-red-600"><button className="flex items-center mx-auto cursor-pointer gap-3.5 text-xl justify-center" onClick={signout}>LOgOut <TbLogout/></button></div>

      </div>
    </div>
  );
}