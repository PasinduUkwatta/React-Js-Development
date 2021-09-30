import React,{useState,useEffect} from "react";
import axios from "axios"

const ResourceList=({resource}) =>{

    const [resources,setResources] =useState([])


    const fetchResource = async ()=> {
       const response= await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
        window.count = Object.keys(response.data[0]).length;
        console.log(window.count);
        renderList()


    }

   const renderList=()=>{
       if(window.count===4){
           return(
               <div>
                   <ul>
                       {resources.map(record=><li key={record.id}>{record.title}</li> )}
                   </ul>

               </div>
           )
       }

       if(window.count===8){
           return(
               <div>
                   <ul>
                       {resources.map(record=><li key={record.id}>{record.name}</li> )}
                   </ul>

               </div>
           )
       }
    }

    useEffect(()=>{
        fetchResource(resource)
    },[resource])


        return(
            <div>
                <ul>
                    {resources.map(record=><li key={record.id}>{record.title}</li> )}
                </ul>

            </div>
        )


}

export default ResourceList