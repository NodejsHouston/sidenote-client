import React, {Component} from 'react';

export default class ProfileFull extends Component {
    render(){
        var {img , img2 , gender , name , location , email , username} = this.props ,
            imgStyle = {margin:'5px' , maxWidth:'150px'};
        return  <div>
                    <img src={img2 || img} style={imgStyle}/>
                    <div style={{margin:'25px'}}>
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">gender</th>
                                    <td>{gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">name</th>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">location</th>
                                    <td>{location}</td>
                                </tr>
                                <tr>
                                    <th scope="row">email</th>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">username</th>
                                    <td>{username}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    }
}
