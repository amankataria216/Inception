import { useEffect, useState } from "react";
import { MENU_URL } from "./Constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setresInfo]=useState(null);

useEffect(()=>{
fetchRestaurant();
},[])

const fetchRestaurant= async () => {
const data = await fetch(MENU_URL+resId);
const json = await data.json();
setresInfo(json)
}
    return resInfo
;
}

export default useRestaurantMenu