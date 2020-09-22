import {combineReducers} from 'redux'

const songsReducer =()=>{
    return [
        {title:'No Scrubs',duration :'4:05'},
        {title:'Marcherina',duration :'3:25'},
        {title:'i want in that way',duration :'4:43'},
        {title:"all start",duration :'5:14'},
    ]
}

const selectedSongReducer=(selectedSong =null,action)=>{
    if(action.type==="SONG_SELECTED"){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong :selectedSongReducer
})