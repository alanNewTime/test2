import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    //i can increment the count by 3 in on push using the updater function because it saves each previous value of count

    //here the value of count is 1
    setCount((prevCount) => prevCount + 1);
    //here it adds 1 to 1 so it is 2
    setCount((prevCount) => prevCount + 1);
    //here it adds 1 to 2 so it is 3
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }

  function decrement() {
    //another syntax for the updater function, using only the first letter of the variable name we are dealing with

    //here the value of count is 3
    setCount((c) => c - 1);
    //here it is 2
    setCount((c) => c - 1);
    //here it is 1
    setCount((c) => c - 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Count;
