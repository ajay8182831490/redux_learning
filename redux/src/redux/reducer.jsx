// src/redux/reducer.js
import { delete1 } from './action';
import { INCREMENT, DECREMENT, PUSH, POP, UPDATE, DELETE } from './actionTypes';

const initialState = {
    count: 0,
    POST: []


};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case PUSH:
            return { ...state, POST: [...state.POST, action.payload] };
        case POP:
            return { ...state, POST: state.POST.slice(0, -1) };
        case UPDATE:

            const updatepost = state.POST.map((post, index) => {



                return index === action.payload.index ? action.payload.newvalue : post
            });

            return { ...state, POST: updatepost };


        case DELETE:
            const newList = state.POST.filter((post, index) => {

                console.log("here ", index)
                return index !== action.payload.index;
            })



            return { ...state, POST: newList }
        default:
            return state;
    }
};

export default counterReducer;
