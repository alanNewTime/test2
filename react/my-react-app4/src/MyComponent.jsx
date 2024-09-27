// useEffect() = React hook that tells react DO SOME CODE WHEN(pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function,[dependencies])

//1. useEffect(() => {})          // Runs after every re-render
//2. useEffect(() => {},[])       // Runs only on mount
//2. useEffect(() => {},[value])  // Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //I am using the the function to modify the title of my document.
  //since i did not specify, the title will change when i change the value of count
  //and when i swich colors

  //   useEffect(() => {
  //     document.title = `count: ${count} ${color}`;
  //   });

  // I am using the function to modify the value of the title only when the page loads.
  // In this case i will see the value of count and color when the page loads and no matter what modifications i do later
  // the title will not change, until i refresh the page.

  //   useEffect(() => {
  //     document.title = `count: ${count} ${color}`;
  //   }, []);

  //I am using the the function to modify the title of my document.
  //since i did specify,by adding a second argument, the title will change ONLY when i change the value of count,
  //and although if i switch colors i will see the colors change, mi title will remain the same until i change the count again

  useEffect(() => {
    document.title = `count: ${count} ${color}`;
  }, [count]);

  //funtions that change count and color

  function addCount() {
    setCount((c) => c + 1);
  }

  function changeColor() {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;
