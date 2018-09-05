import {types} from '../actions/actions'
import {combineReducers} from "redux";


// const data = [
//     {
//         "id": "1",
//         "firstName": "Josefa",
//         "lastName": "Cruickshank",
//         "phone": "202-801-5661"
//     },
//     {
//         "id": "2",
//         "firstName": "Margie",
//         "lastName": "Hilpert",
//         "phone": "1-560-221-9737 x235"
//     },
//     {
//         "id": "3",
//         "firstName": "Cara",
//         "lastName": "O'Keefe",
//         "phone": "1-210-991-2572 x957"
//     }
// ];
const members = (state=[], action)=>{
    switch (action.type) {
        case types.FILL_DATA_FROM_AJAX_SUCCESS:
            //todo fetch data from api
            console.log(action);
            return action.data;
        case types.FILL_DATA_FROM_AJAX_FAILURE:
            //todo fetch data from api
            console.log(action.data);
            return [];
        case types.POST_NEW_MEMBER:
            //todo post new member & fetch updated data
            return state;
        default:
            return state
    }
};

export const mainReducer = combineReducers({
    members
});