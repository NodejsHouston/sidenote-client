import React, {Component} from 'react';
import Message from './Message';


export default class UtilMessageListWrapper extends Component {
    render(){
        var {isNew , messages} = this.props ,
            highlight = isNew?'success':'info';

        return  <div>
                    <button className={`list-group-item list-group-item-${highlight}`}>
                        {isNew?'New':''} Messages
                    </button>
                    
                    {messages.map((message , i)=>{ // react hates lists without a "key" prop
                        return <Message {...{message:message , key:`message${i}`}} />
                    })}
                </div>
    }
}


