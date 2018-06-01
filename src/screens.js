import { Navigation } from 'react-native-navigation';

import HelloWorld from './HelloWorld';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('MiniOnboarding.HelloWorld', () => HelloWorld, store, Provider);
}