import {combineReducers} from 'redux';

import {profileReducer} from './profile/reducers';

const reducers = combineReducers({
  profile: profileReducer,
});

const rootReducer = (state: any, action: any) => reducers(state, action);

export default rootReducer;
