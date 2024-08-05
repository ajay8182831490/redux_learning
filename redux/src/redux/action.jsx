// src/redux/actions.js
import { INCREMENT, DECREMENT, PUSH, POP, UPDATE, DELETE } from './actionTypes';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const push = (post) => ({
    type: PUSH,
    payload: post
})
export const pop = (post) => ({
    type: POP,
    payload: post
})
export const update = (index, newvalue) => ({
    type: UPDATE,
    payload: { index, newvalue }
})

export const delete1 = (index) => ({
    type: DELETE,
    payload: { index }
})