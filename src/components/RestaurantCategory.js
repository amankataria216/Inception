import ReactDOM from 'react-dom'
import Dishes from './Dishes';
import { useState } from 'react';


const RestaurantCatergory =({data,showMenu,expand})=>{
    //This is basic way , but for advance we are lifting the state up and moving this logic into its parent compoenent i.e. RestaurantMenu.
    // const [show,setShow] =useState(false);
    const handleClick=()=>{
        expand();
        console.log(showMenu)
    }
    console.log(data);
    return <div className=" mx-auto  w-6/12">
        <div className=' flex justify-between shadow-lg my-4 p-4 bg-slate-200' onClick={handleClick}>
        <span className='text-lg'>{data?.title}</span> 

       <span>      {!showMenu?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
}</span>
        </div>
        {showMenu && data?.itemCards.map((dish,i)=>{
            return(
                <Dishes key={dish?.card?.info?.id} dish={dish?.card?.info}/>
            )
        })}



        </div>
    
}

export default RestaurantCatergory