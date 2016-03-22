import React, {Component} from 'react';

import Message from './Message';
import Profileblurb from './Profileblurb';

export default class Messagelist extends Component {
  	render() {
  		let {messages} = this.props;
        return  <div>
                    <button className="list-group-item list-group-item-success">
                        Messages
                    </button>
                    
                    {messages.map((message , i)=>{ // react hates lists without a "key" prop
                        return <Message {...{message:message , key:`message${i}`}} />
                    })}
                </div>
  	}
}


