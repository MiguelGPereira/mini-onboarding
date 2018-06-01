import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

class App extends Component {
  constructor(props) {
    super(props);

    this._startApp();
  }

  _startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'MiniOnboarding.HelloWorld',
        title: 'Hello World',
      }
    })
  }
}

export default App;