import React, { useState, useEffect } from "react";

function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //this is gonna call the event listener on mount anche when i refresh
  //so olthough we are gonna see the numbers change i real time, the data will only be saved when i reach a size and refresh the page.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    //this drops the event listener once we are done, to freeup space and avoi unexpected behaviours
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  //another useEffect that will change the title of our page only when the width and the height change, in real time.
  useEffect(() => {
    document.title = `${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </>
  );
}

export default MyComponent2;
