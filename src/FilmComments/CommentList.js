import FilmComment from './FilmComment';
import React from 'react';

const CommentList = (props) =>{

    

    const comments = props.comments.map((comment)=>{
        const {id, avatar, author, timeAgo, content} = comment;
            return <FilmComment key={id} avatar={props.avatars[avatar]} author={author} timeAgo={timeAgo} content={content} />
    });
    return <div className='comment-list'>{comments}</div>
}

export default CommentList;
