import React,{Component} from 'react';
import './Comments.css'

//Comments component that is used in home page and profile page 

 class Comments extends Component {
    render() {
        return <div>
            {this.props.commentsArray.map(comment=>(
                <p key={"para"+comment+this.props.username}><span className="bolder-username">{this.props.username + ': '}</span>{comment}</p>
            ))}
        </div>
    }
}

export default Comments;