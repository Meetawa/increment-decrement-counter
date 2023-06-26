import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const Increment = () => {
    return setCounter(counter + 1);
  };
  const Decrement = () => {
    return setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <h1>
        <span>{counter}</span>
      </h1>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default Counter;
