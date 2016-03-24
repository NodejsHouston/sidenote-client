import React, {Component} from 'react';
import {render} from 'react-dom';
import ProfileFull from './ProfileFull';
import UtilModalWrapper from './UtilModalWrapper';

export default class ProfileBlurb extends Component {
    _showProfileModel(){
        var props = {
            title:'User Profile' ,
            body:<ProfileFull {...this.props} />
        };
        render(<UtilModalWrapper {...props}/> , document.getElementById('modalContainer'))
    }
    render(){
        var {username , img} = this.props ,
            imgStyle = {margin:'5px' , width:'50px' , height:'50px'};

        return  <a href="#" data-toggle="modal" data-target="#modalContainer" onClick={this._showProfileModel.bind(this)}>
                    <img src={img} style={imgStyle}/>
                    <span>{username}</span>
                </a>
    }
}


