import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

class App extends Component {
  constructor(props) {
    super(props);

    this._startApp();
  }

  _startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'onboarding.Landing',
      }
    })
  }
}

export default App;