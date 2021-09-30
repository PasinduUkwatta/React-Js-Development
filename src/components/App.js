import React,{useState} from "react";
import ResourceList from "./ResourceList";
const App =()=>{

    const [resource,setResource] =useState("posts")
console.log(resource)
    return(
        <div className="ui left aligned basic segment">
            <div className="ui container">
                <button className="ui button primary" onClick={()=>setResource("posts")}>Posts</button>
                <button className="ui button primary" onClick={()=>setResource("todos")}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    )
}

export default App