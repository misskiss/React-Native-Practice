import { createStore } from "redux";

// what should shape of store be
const initialState = { counter: 0 };

// what action should happen next
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action creators
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

function reducer(currentState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: currentState.counter + 1 };
    case DECREMENT:
      return { counter: currentState.counter - 1 };
    default:
      return currentState;
  }
}

export const store = createStore(reducer);
