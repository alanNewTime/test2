import UserGreeting from "./UserGreeting";
import List from "./List";
import List2 from "./List2";
import List3 from "./List3.JSX";

function App() {
  // array of objects that will be passed as props
  const students = [
    { id: 1, name: "alan", age: 24 },
    { id: 2, name: "teodoro", age: 23 },
    { id: 3, name: "marta", age: 22 },
    { id: 4, name: "chiara", age: 21 },
  ];

  const teachers = [
    { id: 1, name: "emile", age: 44 },
    { id: 2, name: "giada", age: 33 },
    { id: 3, name: "herve", age: 52 },
    { id: 4, name: "vanessa", age: 41 },
  ];

  return (
    <>
      {/* <UserGreeting name="ALAN" IsLogged={false} /> */} {/*props*/}
      {/* <List></List> */} {/*list from array of fruits*/}
      {/* <List2></List2> */} {/*list from array of objects*/}
      {/* list from array of objects passed as props */}
      <List3 items={students} category="students"></List3>
      <List3 items={teachers} category="teachers"></List3>
    </>
  );
}

export default App;
