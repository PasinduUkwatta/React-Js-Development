// import React,{useState,useEffect} from "react";
// import axios from "axios"
//
// const UsersList=({resource}) =>{
//     console.log(resource)
//
//     const [resources,setResources] =useState([])
//
//
//     const fetchResource = async ()=> {
//         const response= await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
//         setResources(response.data)
//
//     }
//
//     useEffect(()=>{
//
//         fetchResource(resource)
//     },[resource])
//
//     return(
//         <div>
//             <ul>
//                 {resources.map(record=><li key={record.id}>{record.name}</li> )}
//             </ul>
//
//         </div>
//     )
//
// }
//
// export default UsersList