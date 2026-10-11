import { Link } from "react-router-dom";
import useProduct from "../zustand/productstore";

// أيقونة لكل قسم حسب اسمه (لو الاسم مش موجود بتظهر 🛍️)
const icons: Record<string, string> = {
  chairs: "🪑",
  bags: "👜",
  clocks: "🕰️",
};

export default function Products() {
  const categories = useProduct((s) => s.categories);

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#f8f5ec] p-4">
      <div className="rounded-[2rem] bg-white px-8 py-8 shadow-2xl">
        <p className="mb-5 text-center text-stone-500">
          What are you looking for?
        </p>

        <div className="flex gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/Shop/${cat.name}/${cat.id}`}
              className="group text-center"
            >
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#f8f5ec] text-4xl shadow transition group-hover:bg-[#b38a5b] group-hover:shadow-lg">
                {icons[cat.name.toLowerCase()] ?? "🛍️"}
              </div>
              <span className="mt-2 block text-stone-900">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}