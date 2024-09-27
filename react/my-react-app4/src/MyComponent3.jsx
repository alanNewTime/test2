// useState() = Re-renders the component when the state value changes

//useRef()  = "use reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//           1. Accessing/Interacting with DOM elements
//           2. Handling Focus, Animations and Transitions
//           3. Managing Timers and Intervals

import React, { useState, useRef, useEffect } from "react";

function MyComponent3() {
  //   let [number, setNumber] = useState(0);
  const ref = useRef(0);

  //the useEffect below is just to test. I see that if i use useState() the message
  // will be rendered everytime i click and the value of the number increase, with useEffect,
  // i will see only one render message in the console aven though the value of the number
  //increases.
  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick() {
    // setNumber((n) => n + 1);
    ref.current++;
    console.log(ref.current);
  }

  return (
    <>
      <div>
        {/* <p>Number: {number}</p> */}
        <button onClick={handleClick}>click me!</button>
      </div>
    </>
  );
}

export default MyComponent3;
