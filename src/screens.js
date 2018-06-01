import { Navigation } from 'react-native-navigation';

import HelloWorld from './HelloWorld';

export function registerScreens() {
  Navigation.registerComponent('MiniOnboarding.HelloWorld', () => HelloWorld);
}