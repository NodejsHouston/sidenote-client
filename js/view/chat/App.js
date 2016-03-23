import React, {Component} from 'react';
import Messagelist from './Messagelist';
import _test from '../../testData/data';

export default class App extends Component {
  render() {
    return  <div id='App'>
                <Messagelist {..._test}/>
            </div>
  }
}

