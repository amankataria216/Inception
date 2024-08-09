import { CDN_URL } from "../utils/constants";
const Dishes =({dish})=>{
    console.log("dishes",dish);
    return(
        <div className="flex justify-between border-b-2 mb-1 "> 
            <span>
           <p className="text-sm font-semibold">{dish?.name}</p>
           <p  className="text-xs">₹{dish?.price?dish?.price/100:dish?.defaultPrice/100}</p>
           <p className="text-xs">{dish?.description}</p>
           </span>
           <div className="m-1 p-1">
           <div className="absolute">
           <button className="m-auto p-1 bg-red-400 shadow-lg rounded-sm text-white ">+</button>
           </div>
           <img className="w-20" src={CDN_URL+dish?.imageId}></img>
           </div>
           

        </div>

    )
}

export default Dishes