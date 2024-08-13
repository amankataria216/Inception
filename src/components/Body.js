import React, { useEffect,useContext } from "react";
import RestaruentCard,{withLabledRestaurentCard} from "./RestaruentCard";
import resObj from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body=()=>{

    //State varible
    let [listOfRes,setlistOfRes] = useState([]);
    let [filteredList,setfilteredList] = useState([]);
    let [searchText,setSearchText]=useState("");

    const RestaurentPromoted = withLabledRestaurentCard(RestaruentCard)

    const {LogInUser,setuserName}=useContext(UserContext);
    //Whenever state varible updates , react triggers a reconciliation(re-rendering)
    useEffect(()=>{
        console.log("useEffect is called")
        fetchData()
    },[]);
    console.log("body rendered")

    //Use corss policy extension - it occurs bcs browser dont allow a app to call 3rd party app.
    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.56037353715015&lng=77.38544605085391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res = await data.json();
    console.log("data",res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setlistOfRes(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <h1>Opps, seems like you are offline</h1>
    }

    
    return listOfRes.length==0?<Shimmer/>:(
        <div className="body-container">
            <div className="flex m-2 p-2 items-center">
            <div className="search-bar">
                <input type="text" className="border border-solid border-black"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button className=" mx-2 px-2 py-1 bg-red-300 rounded-lg"
                 onClick={()=>{
                    console.log("search",searchText)
                    const searchResult=listOfRes.filter((data)=>
                       data.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )

                    console.log("searchResult",searchResult)
                    setfilteredList(searchResult);
                   //setlistOfRes(searchResult);
                }}
                >search</button>
            </div>
            <div>
                <button className="mx-2 px-2 py-1 bg-red-300 rounded-lg" 
                onClick={()=>
                    {
                        const filteredList=resObj.filter((res)=>res.info.avgRating>4);
                        setlistOfRes(filteredList);
                    }
                }>Top Rated Restaurants</button>
                </div>
                <div>
                <lable>User Name:</lable>
                <input className="border border-black" value={LogInUser} onChange={(e)=>setuserName(e.target.value)}/>
                </div>
            </div>

            <div className="flex flex-wrap">
            {/* <RestaruentCard resName="Lazeez" cuisine="North Indian, Chinese, Continental"/> */}
            {
                filteredList.map((data,i)=>(
                    //not having key (not acceptable)<<<<<<<having index as a key <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<havig unique keys(best practice)
                    //Here RestaurentPromoted is a HOC.
                 <Link to={"/restaurant/"+data.info.id} key={data.info.id}>
                    
                    {data.info?.aggregatedDiscountInfoV3?.discountTag?<RestaurentPromoted resData={data}/>:<RestaruentCard resData={data}/>}
                    
                    </Link>
                ))
            }
            
            </div>
            

        </div>
    )
}

export default Body