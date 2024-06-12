/*

<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
ReactElemen(object)->html DOm when rendered in the browser .
*/ 

const headingReact=React.createElement("h2",{id:"h"},"Hello from react");

//This is how we can write the nested react elemets;

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"hi from nested element!!"),
React.createElement("h3",{},"hi from nested element for h3!!")] //This array is the child array to have a sibling nodes
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"hi from nested element!!"),
React.createElement("h3",{},"hi from nested element for h3!!")] //This array is the child array to have a sibling nodes
)]
);

//This is not the way we write but this is how we use it .. or the background
//JSX is the way we write code.

console.log(headingReact) //it is a javascript oject or its a reactelemet not a h2 element
var rootReact=ReactDOM.createRoot(document.getElementById("root"));
//rootReact.render(headingReact);
rootReact.render(parent);