import { combineReducers } from 'redux';
import { counterReducer } from './counter/counter-reducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export { rootReducer };