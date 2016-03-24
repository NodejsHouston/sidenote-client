import React, {Component} from 'react';

import UtilMessageListWrapper from './UtilMessageListWrapper';

export default class Messagelist extends Component {
  	render() {
        var {old , _new} = this.props.messages;

        return  <div className="list-group" style={{margin:'25px'}}>
                    <UtilMessageListWrapper {...{messages:old}}/>
                    
                    {/*only render if we have _new messages*/}
                    {_new.length? 
                        <UtilMessageListWrapper {...{messages:_new , isNew:true}}/>
                    :''}
                </div>
  	}
}


