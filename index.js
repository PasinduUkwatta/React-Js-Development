import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {

    render() {

        //we can use this  to identify the location of the user
        window.navigator.geolocation.getCurrentPosition(
            (position)=>console.log(position),
            (err) =>console.log(err)
        )
        return (<div>Latitide :</div>)
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)