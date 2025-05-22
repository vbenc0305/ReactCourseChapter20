import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter : 0 , showCounter: true };

createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const counterReducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return{
            counter: state.counter++,
            showCounter: state.showCounter
        }
    } else if (action.type === 'DECREMENT') {
        return{
            counter: state.counter--
        }
    } else if (action.type === 'INCREASE'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    } else if (action.type === 'TOGGLE' ) {
        return{
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    }
    return state;
}

const store = createStore(counterReducer)

export default store;