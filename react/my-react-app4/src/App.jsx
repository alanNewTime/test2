import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyComponentA from "./MyComponentA.jsx";
import MyComponent3 from "./MyComponent3.JSX";

function App() {
  return (
    <>
      {/* useEffect() first intro and first application (change title, count, color) */}
      {/* <MyComponent></MyComponent> */}

      {/* useEffect() another application (display length and height of the page, clean up function) */}
      {/* <MyComponent2></MyComponent2> */}

      {/* useContext() hook, avoiding PROPS DRILLING*/}
      {/* <MyComponentA></MyComponentA> */}

      {/* useRef() hook,*/}
      {/* <MyComponent3></MyComponent3> */}
    </>
  );
}

export default App;
