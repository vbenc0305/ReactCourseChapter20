import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {use} from "react";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);

    const incrementHandler = () => {
        dispatch({type: 'INCREMENT'});
    }
    const decrementHandler = () => {
        dispatch({type: 'DECREMENT'});
    }

    const increaseHandler = () => {
        dispatch({type: 'INCREASE', amount: 5});
    }

    const toggleCounterHandler = () => {
        dispatch({type: 'TOGGLE'});
        console.log('Toggle Counter');
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      );
};

export default Counter;
