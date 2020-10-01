import React from 'react'


const CommentDetail =(props)=>{
    console.log(props)

    return(
        <div >
            <div className='comment'>
                <a href ='/' className ='avatar'>
                    <img alt ='avatar' src={props.imgSrc}/>
                </a>
                <div className ='content'>
                    <a className ='author' href ='/'>
                        {props.author}
                    </a>
                    <div className ='metadata'>
                        <span className ='date'>{props.timeAgo}</span>
                    </div>
                    <div className ='text'>{props.comment}</div>

                </div>
            </div>
        </div>
    )
}

export default CommentDetail