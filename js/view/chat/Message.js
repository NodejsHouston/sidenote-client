import React, {Component} from 'react';
import ProfileBlurb from './ProfileBlurb';


export default class Message extends Component {
  	render() {
        var {profile , content} = this.props.message;

        return  <button className="list-group-item">
                    <ProfileBlurb {...profile}/>
                    <div>{content}</div>
                </button> 
  	}
}


