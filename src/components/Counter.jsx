import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    return setCounter(counter + 1);
  };
  const Decrement = () => {
    return setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default Counter;
