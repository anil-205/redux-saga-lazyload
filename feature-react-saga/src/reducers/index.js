import { combineReducers } from 'redux';
import { ImagesReducer } from './images-reducer'

export const rootReducers = combineReducers({
    ImagesReducer: ImagesReducer
});