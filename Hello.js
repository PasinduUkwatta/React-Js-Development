import React from "react";


class Hello extends React.Component{
    render() {
        return(
            <div className="f1 tc">
                <h1>
                    Hello World {this.props.greeting}
                </h1>

                <h2>
                    Welcome to React Programming
                </h2>
            </div>
        )
    }
}

export default Hello