import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const Increment = () => {
    setCounter(Counter + 1);
  };
  const Decrement = () => {
    setCounter(Counter - 1);
  };
  return (
    <>
      <h1>State is : {counter}</h1>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
    </>
  );
};

export default Counter;
