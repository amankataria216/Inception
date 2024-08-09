import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.jsx"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const Grocery = lazy(()=>import("./components/InstaMart.jsx"));

//dynamic loading
//chunking
//lazy loading
//dynamic import
//code splitting

const AppLayout =()=>{
    return(
    <div className="max-w-screen-2xl">
        <Header></Header>
        <Outlet/>
    </div>
    )
}

//This is normal rout example
// const appRouter = createBrowserRouter([
//     {path:"/",
//     element:<AppLayout/>,
//     errorElement:<Error/>,
//     },
//     {
//         path:"/about",
//         element:<About/>,
//         errorElement:<Error/>,
        
//     },
//     {
//         path:"/contact",
//         element:<ContactUs/>
//     }
// ])

//This is example of child route
const appRouter = createBrowserRouter([
    {path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>,
            
        },
        {
            path:"/about",
            element:<About/>,
            errorElement:<Error/>,
            
        },
        {
            path:"/contact",
            element:<ContactUs/>
        },
        {
            path:"/instamart",
            element:(<Suspense fallback={<h1>Loading from Suspense....</h1>}><Grocery/></Suspense>)
        },
        {
            path:"/restaurant/:resid",//This is dynamic routing
            element:<RestaurantMenu/>
        }

    ],
    errorElement:<Error/>,

    },

])
var rootReact=ReactDOM.createRoot(document.getElementById("root"));
rootReact.render( <RouterProvider  router={appRouter}/>);