
import { createStore, combineReducers } from 'redux';
import { postReducer } from 'store/personal/index'

const rootReducer = combineReducers({
    postReducer
})

export const store = createStore(rootReducer)
