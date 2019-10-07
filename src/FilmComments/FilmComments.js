import React from 'react';
import instance from '../axiosInstance';

import avatar0 from './images/avatar0.png'
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import avatar5 from './images/avatar5.png'
import avatar6 from './images/avatar6.png'
import avatar7 from './images/avatar7.png'
import avatar8 from './images/avatar8.png'

import CommentList from './CommentList';

const avatarArray = [
    avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8
]





class FilmComments extends React.Component{
    state = {comments: [], avatars: avatarArray};

    async componentDidMount(){
        let comments = await instance.get('/api/comments');
        comments = comments.data;
        console.log(comments);
        this.setState({comments: comments, avatars: avatarArray});
        // this.setState()
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'15px'}}>
                <CommentList comments={this.state.comments} avatars={this.state.avatars}/>
            </div>
        )
    }

        
}

export default FilmComments;