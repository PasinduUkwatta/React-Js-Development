import {combineReducers} from 'redux';

const songsReducer =()=>{
   return [

       {title: 'No Scrubs', duration: '4:05'},
       {title: 'Marcrena', duration: '3:45'},
       {title: 'All Star', duration: '3:27'},
       {title: 'I Want In that Way', duration: '5:16'}

   ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if (action.type==="SONG_SELECTED"){
        return action.payload
    }

    return selectedSong

}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})