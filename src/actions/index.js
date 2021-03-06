import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash'

export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{

    await dispatch(fetchPosts())
   //  console.log(getState().posts)
   // const userIds= _.uniq(_.map(getState().posts,"userId"))
   //  console.log(userIds)
   //  userIds.forEach(id=>dispatch(fetchUser(id)))


    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach(id=>dispatch(fetchUser(id)))
        .value()

}

export const fetchPosts= ()=>async dispatch=>{
    const responce =  await jsonPlaceHolder.get("posts")

    dispatch({type:"FETCH_POSTS",payload:responce.data})
}

// export const fetchUser =(id)=> dispatch=> _fetchUser(id,dispatch)
//
// const _fetchUser=_.memoize(async (id,dispatch)=>{
//     const responce =await jsonPlaceHolder.get(`/users/${id}`)
//
//     dispatch({type:"FETCH_USER",payload:responce.data})
// })



export const fetchUser =(id)=> async dispatch=> {
 const responce =await jsonPlaceHolder.get(`/users/${id}`)

    dispatch({type:"FETCH_USER",payload:responce.data})
}