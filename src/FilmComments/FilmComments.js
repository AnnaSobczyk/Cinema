import React from 'react';
// import ReactDOM from 'react-dom';
import FilmComment from './FilmComment'

import avatar1 from './images/avatar1.PNG'
import avatar2 from './images/avatar2.PNG'
import avatar3 from './images/avatar3.PNG'
import avatar4 from './images/avatar4.PNG'
import CommentList from './CommentList';

const avatarArray = [
    avatar1, avatar2, avatar3, avatar4
]

const dane = [
    {
        id: 0,
        author: 'User0',
        avatar: 0,
        timeAgo: 'Today',
        content: 'Nice blog post0'
    },
    {
        id: 1,
        author: 'User1',
        avatar: 1,
        timeAgo: 'Today',
        content: 'Nice blog post1'
    },
    {
        id: 2,
        author: 'User2',
        avatar: 2,
        timeAgo: 'Today',
        content: 'Nice blog post2'
    },
    {
        id: 3,
        author: 'User3',
        avatar: 3,
        timeAgo: 'Today',
        content: 'Nice blog post3'
    },

];




class FilmComments extends React.Component{
    state = {comments: dane, avatars: avatarArray};

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <CommentList comments={this.state.comments} avatars={this.state.avatars}/>
            </div>
        )
    }

        
}



    // render(){
    //     return (
    //         <div className="ui container comments">

    //             <FilmComment
    //                 author={dane[1].author} 
    //                 timeAgo="Today at 4:45PM"
    //                 avatar= {avatar3}
    //                 content="Nice blog post1"
    //             />

    //         </div>
    //     );   
    // }

export default FilmComments;