import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, push, pop, update, delete1 } from '../redux/action';

const Counter = () => {
    const count = useSelector(state => state.count);
    const posts = useSelector(state => state.POST); // Renamed from push2 to posts
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(push(count));
        dispatch(increment());
    };

    const handleDelete = (index) => {
        dispatch(delete1(index));
    };

    return (
        <div className='center'>
            <h1>Count: {count}</h1>
            <h2>Posts:</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        {post}
                        <button onClick={() => handleDelete(index)}>Delete</button> {/* Delete button for each post */}
                    </li>
                ))}
            </ul>
            <button onClick={increase}>Increment</button>
            <button onClick={() => { dispatch(decrement()); dispatch(pop()); }}>Decrement</button>
        </div>
    );
};

export default Counter;
