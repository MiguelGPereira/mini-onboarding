import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', 
  'Module RCTImageLoader', 
  'Class RCTCxxModule was not exported'
]);

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
        navigatorStyle: {
          navBarHidden: true
        }
      }
    })
  }
}

export default App;