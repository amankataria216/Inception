import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(<div>
        <h1 style={{color:'red'}}>Opps, Somthing went wrong!!</h1>
        <h2>{err.status}:{err.data}</h2>
    </div>) 
}
export default Error