//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom"

function getButtonText(){
    return "click On Me!"
}

//Craete a react Component
const App = function () {

    return (
        <div>
            <label className="label" for="name">Enter the Name :</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:"blue",color:"white"}}>{getButtonText()}</button>
        </div>
    )
};


//Take the react Component and show it on the screeen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)






