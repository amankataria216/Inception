import React ,{lazy,Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.jsx"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";


const Grocery = lazy(()=>import("./components/InstaMart.jsx"));

//dynamic loading
//chunking
//lazy loading
//dynamic import
//code splitting


const AppLayout =()=>{

    //authorization logic present here:
    const [userName,setuserName]=useState(null);

    useEffect(()=>{
        const data={
            name:"Aman kataria"
        }
        setuserName(data.name)
    },[])
//Here we are showing an expample where we are updatin the context using provide method
//- if we pass the value it takes the value in component else it takes default value.
    return(
    <UserContext.Provider value={{LogInUser:userName,setuserName}}>
    <div className="max-w-screen-2xl">
    <UserContext.Provider value={{LogInUser:userName}}>
        <Header></Header>
        </UserContext.Provider>
        <Outlet/>
    </div>
    </UserContext.Provider>
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