import React from "react";
import { CDN_URL } from "../utils/constants";

const cardStyle={
    background:"#f0f0f0"
}

const RestaruentCard=(props)=>{
    // const RestaruentCard=({resName,cuisine})=>{
        //discountTag
     const {resData}=props;
 const {cloudinaryImageId,name,cuisines,avgRating,sla,aggregatedDiscountInfoV3} = resData?.info;
 
     return(
         <div className="m-4 p-4 w-[300px] bg-slate-100 hover:bg-slate-200"  >
             <img className="res-img" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
           <h3 className="py-4 font-bold text-lg">{name}</h3> 
           <h5>{cuisines.join(" ,")}</h5> 
           <h5>{avgRating} Star</h5> 
           <h5>{sla.deliveryTime} mins to deliver</h5> 
         </div>
     )
 }

 export const withLabledRestaurentCard=(RestaruentCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute p-2 m-1 bg-red-400 text-white rounded-lg">Promoted</label>
                <RestaruentCard {...props}/>
            </div>
        )
    }

    
 }
 
 export default RestaruentCard