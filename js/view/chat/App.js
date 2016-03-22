import React, {Component} from 'react';
import {render} from 'react-dom';
import Messagelist from './Messagelist';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        App
        <Messagelist />
      </div>
    )
  }
}

render(<App />, document.getElementById('container'));
