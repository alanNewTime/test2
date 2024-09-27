import Count from "./Count";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";

function App() {
  return (
    <>
      {/* updater function. Passed as an argument to useState(),ex.setYear(y=>y+1). Allows for safe updates based on the previous state.
      It is generally used with multiple state updates and asynchronous functions*/}
      {/* <Count></Count> */}

      {/* update the state of an object*/}
      {/* <MyComponent></MyComponent> */}

      {/* update the state of an array of values*/}
      {/* <MyComponent2></MyComponent2> */}

      {/* update the state of an array of objects (adding and deleting cars from a list)*/}
      {/* <MyComponent3></MyComponent3> */}
    </>
  );
}

export default App;
