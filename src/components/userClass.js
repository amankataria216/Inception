import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        // console.log(this.props.name)
        // this.state={
        //     count:0
        // }
       // console.log("constructor of child")
       this.state={
        userInfo:{
            name:'Default',
            location:'Default',
        }
       }
        
    }

   async  componentDidMount(){
       // console.log("component did mount :parent")
        const data = await fetch("https://api.github.com/users/amankataria216")
        const json=await data.json();
        console.log("user json",json);
        this.setState({userInfo:json});
    };
    componentDidUpdate(){
        console.log("component did update is called")
    }
    componentWillUnmount(){
        console.log("component will unmount is called")

    }
    render(){
        const {login,location,avatar_url,email}=this.state.userInfo;
        //console.log("render of chil")
        const {name,Location,Email}=this.props.props
       // const {count}=this.state
        return(
            <div className="user-class">
                {/* <h1>Count:{count}</h1>
                <button onClick={()=>{
                    //NEVER UPDATE THE VALUE OF STATE VARIBALE DIRECTLY
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>update count</button> */}
                <img src={avatar_url} style={{width:'100px',height:"100px"}}/>
                <h2>Name:{login==null?"Aman":login}</h2>
                <h3>Location:{location===null?"Noida":location}</h3>
                <h3>Email:{email==null?"amankataria@ba.com":"amankataria216@gmail.com"}</h3>
                <div>LoggedIn user:</div>
                <UserContext.Consumer>{({LogInUser})=>
                    <h1 className="text-2xl font-bold">{LogInUser}</h1>
                }</UserContext.Consumer>
            </div>
        )
    }
}

export default UserClass;