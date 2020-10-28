import {combineReducers} from "redux";

const songsReducer =()=>{
    return[
        {title:"No Srubs",duration :"4:05"},
        {title:"Marcerena",duration :"3:25"},
        {title:"All Star",duration :"4:53"},
        {title:"I wank in That way",duration :"3:32"},
    ]
}

const selectedSongReducer = (selectedSong =null,action) =>{
    if(action.type==="SONG_SELECTED"){
      return action.payload
    }
return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})