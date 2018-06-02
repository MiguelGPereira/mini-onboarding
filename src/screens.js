import { Navigation } from 'react-native-navigation';

import Landing from './modules/onboarding/Landing';
import Age from './modules/onboarding/Age';
import Height from './modules/onboarding/Height';
import Success from './modules/onboarding/Success';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('onboarding.Landing', () => Landing, store, Provider);
  Navigation.registerComponent('onboarding.Age', () => Age, store, Provider);
  Navigation.registerComponent('onboarding.Height', () => Height, store, Provider);
  Navigation.registerComponent('onboarding.Success', () => Success, store, Provider);
}