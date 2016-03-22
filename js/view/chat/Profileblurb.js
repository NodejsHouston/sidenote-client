import React, {Component} from 'react';


export default class Profileblurb extends Component {
    render(){
        var {username , img} = this.props ,
            imgStyle = {margin:'5px' , width:'50px' , height:'50px'};

        return  <a href="#">
                    <img src={img} style={imgStyle}/>
                    <span>{username}</span>
                </a>
    }
}


