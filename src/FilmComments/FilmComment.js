import React from 'react';
import './FilmComment.css'

class FilmComment extends React.Component{

    

    render(){
        return(
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={this.props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="data">
                            {this.props.timeAgo}
                        </span>
                        <div className="text">
                            {this.props.content}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default FilmComment;