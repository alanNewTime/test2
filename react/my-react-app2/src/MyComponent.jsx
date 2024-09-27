import React, { useState } from "react"; //i use object destructuring to import only the useState function from the react library and not the whole library

function MyComponent() {
  // the useSate functon returns a variable and a setter function. the value inside the "useState(...)"" is the default value we want to give to our stateful variable, its not compulsory
  const [name, setName] = useState("default name");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  //manage the name(string)
  const updateName = () => {
    setName("Teo");
    //console.log(name);
  };

  //manage the age(number)
  const incrementAge = () => {
    setAge(age + 1);
  };

  //manage the employement status (boolean)
  const changeStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
        <button onClick={changeStatus}>Update Employment status</button>
      </div>
    </>
  );
}

export default MyComponent;
