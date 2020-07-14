import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning !</h4>
                </div>
                Are You Sure ?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo="Today 4:45 pm"
                    content='Its beautiful'
                    image={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author='Alex'
                    timeAgo="Today 2:34 pm"
                    content='Good Looking'
                    image={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author='Jane'
                    timeAgo=" Yesterday 11:07 pm"
                    content='Very Cool'
                    image={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>


    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))