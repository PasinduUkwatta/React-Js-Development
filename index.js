import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{

    state = {lat:null,errorMessage: ''}

    componentDidMount() {
        console.log("my component to the screen")
        window.navigator.geolocation.getCurrentPosition(
            position =>
                this.setState({lat: position.coords.latitude}),
            (err)=> this.setState({errorMessage:err.message})

        )
    }


    componentDidUpdate(){
        console.log("my component updated")
    }

    renderContent(){
        if(this.state.errorMessage&&!this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage&&this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else{
            return <div><Spinner message="Please Accept the Location Request"/></div>
        }
    }

    render(){
        console.log(this.state)
            return(
                <div className ="border red">
                    {this.renderContent()}
                </ div>
            )

    }
}

ReactDOM.render(<App />,document.querySelector("#root"))