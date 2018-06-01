import { combineReducers } from 'redux';

import onboarding from './../modules/onboarding/onboarding.reducer';

const rootReducer = combineReducers({
	onboarding
});

export default rootReducer;