import React, {Component} from 'react';

import Message from './Message';
import Profileblurb from './Profileblurb';

export default class Messagelist extends Component {
  render() {
    return (
      <div id='Messagelist'>
        Messagelist
        <Message />
        <Profileblurb />
      </div>
    )
  }
}


