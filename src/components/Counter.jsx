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
    <>
      <h1>State is : {counter}</h1>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
    </>
  );
};

export default Counter;
