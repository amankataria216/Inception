import React from "react"
import UserClass from "./userClass"

class About extends React.Component{
    constructor(props){
        super(props)
        
       // console.log("constructor of parent")
    }

    async componentDidMount(){
        //console.log("component did mount :parent")
        //API call

    };
    render(){
       // console.log("render of parent")
        const info={
            name:'Aman Kataria',
            Location:'Patiala,Punjab',
            Email:'amankataria216@gmail.com'
        }
        return(
            <div>
            <h1>Hi Welcome to Our APP</h1>
            <h2>This is our food ordering website.For more queries contatc on amankataria216@gmail.com</h2>
            <h3>+91-7696978404</h3>
            <h3>Towe-B 1504 Sunshine helios,Noida</h3>
            <UserClass props={info}/>
</div>
        )
    }
}

// const About=()=>{
//     const info={
//         name:'Aman Kataria',
//         Location:'Patiala,Punjab',
//         Email:'amankataria216@gmail.com'
//     }
//     return(
//         <div>
//                     <h1>Hi Welcome to Our APP</h1>
//                     <h2>This is our food ordering website.For more queries contatc on amankataria216@gmail.com</h2>
//                     <h3>+91-7696978404</h3>
//                     <h3>Towe-B 1504 Sunshine helios,Noida</h3>
//                     <UserClass props={info}/>
//         </div>

//     )
// }
export default About