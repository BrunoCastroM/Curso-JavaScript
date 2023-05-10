import { combineReducers } from 'redux';

import exempleReducer from './example/reducer';

export default combineReducers({
  example: exempleReducer,
});
