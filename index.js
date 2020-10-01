import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from "./CommentDetail";
import faker from 'faker'
import ApprovalCard from "./ApprovalCard";

const App =()=>{
    return(
        <div className ='ui container comments'>
            <ApprovalCard>
                <h4> Warning </h4>
                <div >Are You Sure Want to do this ?</div>

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author ="sam"
                    timeAgo ="Today at 3.39pm"
                    comment ="nice work"
                    imgSrc={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author ="alex"
                    timeAgo='yesterday 5.54am'
                    comment ="good looking"
                    imgSrc={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author ="jane"
                    timeAgo='toady at 4.30pm '
                    comment ="very beautiful"
                    imgSrc={faker.image.avatar()}

                />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App />,document.querySelector("#root"))