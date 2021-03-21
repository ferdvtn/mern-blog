import { combineReducers } from 'redux';
import globalReducer from './globalReducer'
import homeReducer from './homeReducer'
import createBlogReducer from './createBlogReducer'
import getDetailBlogReducer from './getDetailBlogReducer'

const reducer = combineReducers({globalReducer, homeReducer, createBlogReducer, getDetailBlogReducer})

export default reducer;