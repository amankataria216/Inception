import { useState, } from "react"
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/Constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const [showIndex,setShowIndex] =useState(0);
    const handleClick=()=>{
        setShow(!show)
        console.log(show)
    }
    
    const {resid}=useParams();
    const resMenu = useRestaurantMenu(resid);

    if(resMenu===null) return <Shimmer/>;
    // const {name,avgRating,areaName,costForTwoMessage,cuisines,id,locality} = resMenu?.data?.cards[2]?.card?.card?.info
        const {name,avgRating,areaName,costForTwoMessage,cuisines,id,locality} = resMenu?.data?.cards[2]?.card?.card?.info
        
         const itemCards= resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
         console.log('itemCards',itemCards)

    return(
        <div>
        <div className="text-center border-b-2">
             <h1 className="font-bold text-2xl my-2">{name}-{avgRating}</h1>
            <h4>{areaName}-{locality}</h4>
            <h2>{cuisines.join(",")}-{costForTwoMessage}</h2>      
        </div>
        {itemCards.map((x,i)=>{
            return(
                <div>
                <RestaurantCatergory 
                key={x?.card?.card?.title}
                data={x?.card?.card}
                showMenu={i==showIndex?true:false} 
                expand={()=>setShowIndex(i)}
                 />
                </div>
            )
   

        })}
        </div>

        
    )
}

export default RestaurantMenu