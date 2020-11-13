import { combineReducers } from 'redux';
import examReducer from './examReducer'
export default combineReducers({
    exam:examReducer
})