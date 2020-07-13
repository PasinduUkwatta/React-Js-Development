import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <div className ="comment">
                <CommentDetail
                    author='Sam'
                    timeAgo ="Today 4:45 pm"
                    content ='Its beautiful'
                    image ={faker.image.avatar()}
                />

                <CommentDetail
                    author ='Alex'
                    timeAgo ="Today 2:34 pm"
                    content ='Good Looking'
                    image ={faker.image.avatar()}
                />

                <CommentDetail
                    author ='Jane'
                    timeAgo =" Yesterday 11:07 pm"
                    content ='Very Cool'
                    image ={faker.image.avatar()}
                />

            </div>

        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))