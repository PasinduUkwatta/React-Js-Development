import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component{
    state ={
        images :[]
    }

  onSearchSubmit= async (term)=>{
      const responce = await unsplash.get('/search/photos',{
            params :{query:term},

        })

       this.setState({images:responce.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:"15px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }


}

export default App