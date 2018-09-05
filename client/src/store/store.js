import {createStore, applyMiddleware} from "redux";
import {mainReducer} from "../reducers/reducer";
import thunk from "redux-thunk";


export const store = createStore(mainReducer, applyMiddleware(thunk));