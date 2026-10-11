import { Suspense,lazy, useEffect } from "react";
import { ToastContainer} from "react-toastify"
const Signin=lazy(()=>import('./pages/Login'))
const Signup=lazy(()=>import('./pages/Signup'))
const Layout=lazy(()=>import('./common/Layout'))
const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const Shop=lazy(()=>import('./pages/Shop'))
const Pages=lazy(()=>import('./pages/Pages'))
const Products=lazy(()=>import('./pages/Products'))
const Contact=lazy(()=>import('./pages/Contact'))
const Productpage=lazy(()=>import('./pages/Productpage'))
const WishList=lazy(()=>import('./pages/WishList'))
const ProtectedPage=lazy(()=>import('./component/ProtectedPage'))
const Cartpage=lazy(()=>import('./pages/CartPage'))
const Placingorder=lazy(()=>import('./pages/Placingorder'))



const Loadhandelar=lazy(()=>import('./re-use/Loadhandelar'))

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthInitialize from "./component/AuthInitialize";
import useWishlist from "./zustand/wishListStore";
import useAuth from "./zustand/authData";
import CartPage from "./pages/CartPage";
import useCart from "./zustand/CartStore";
import Onpages from "./pages/Onpages";
export default function App() {
   const getwishlist=useWishlist(s=>s.getWishList)  
   const getCart=useCart(s=>s.getCart)  
    const user=useAuth(s=>s.user)


    useEffect(()=>{
if(user){
    getCart()
    getwishlist()
}
    },[getwishlist,user,getCart])
   const route= createBrowserRouter([
    {
      path: "/",
      element:<Suspense fallback={<Loadhandelar status="main" />}><Layout/></Suspense> ,
      children: [ // Outlet
        { index: true, element:<Suspense  fallback={<Loadhandelar status="page"/>}> <Home/></Suspense> },
        { path: "home", element: <Suspense fallback={<Loadhandelar status="page"/>}><Home /></Suspense> },
        { path: "about", element:<Suspense fallback={<Loadhandelar status="page"/>}><About /> </Suspense> },
        { path: "shop", element: <Suspense fallback={<Loadhandelar status="page"/>}><Shop /></Suspense> },
        { path: "cartpage/shop", element: <Suspense fallback={<Loadhandelar status="page"/>}><Shop /></Suspense> },
        { path: "pages", element:<Suspense fallback={<Loadhandelar status="page"/>}> <Pages /></Suspense> },
        { path: "wishlist", element:<Suspense fallback={<Loadhandelar status="page"/>}><ProtectedPage><WishList /></ProtectedPage> </Suspense> },
        { path: "cartpage", element:<Suspense fallback={<Loadhandelar status="page"/>}><ProtectedPage><Cartpage /></ProtectedPage> </Suspense> },
        { path: "cartpage/placingorder", element:<Suspense fallback={<Loadhandelar status="page"/>}><ProtectedPage><Placingorder /></ProtectedPage> </Suspense> },
        { path: "products", element:<Suspense fallback={<Loadhandelar status="page"/>}><Products/></Suspense>  },
        { path: "shop/:name/:id", element:<Suspense fallback={<Loadhandelar status="page"/>}><Productpage /></Suspense>  },
        { path: "contact", element: <Suspense fallback={<Loadhandelar status="page"/>}><Contact /></Suspense> },
         { path: "login", element:<Suspense fallback={<Loadhandelar status="page"/>}> <Signin /></Suspense> },
        { path: "signup", element:<Suspense fallback={<Loadhandelar status="page"/>}><Signup /></Suspense>  },
      
        // { path: "*", element: <NotFoundPage /> },
      ],
      
    },
  ],{ basename: import.meta.env.BASE_URL });
  
  
  
  
  return <div className="min-h-screen  flex flex-col">

   <RouterProvider router={route}/>
          

   <AuthInitialize/>
   <ToastContainer
   position='top-right'
   theme='light'
   autoClose={2000}
   draggable
   pauseOnHover
   />
   </div>

}
