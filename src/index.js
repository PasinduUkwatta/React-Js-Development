//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom"



//Craete a react Component
const App = function () {
    const buttonText ={text: 'click me'}
    const labelText ='Enter Name :'

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:"blue",color:"white"}}>{buttonText.text}</button>
        </div>
    )
};


//Take the react Component and show it on the screeen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)






