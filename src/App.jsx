import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment, Reset } from './Redux/action/action';

const App = () => {
  let value = useSelector(state => state);
  let { CounterReducer } = value;
  let dispatch = useDispatch();
  return (
    <div>
      <h1>{CounterReducer}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};

export default App;
