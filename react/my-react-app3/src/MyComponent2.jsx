import React, { useState } from "react";

function MyComponent2() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana", "Mango"]);

  function handleAddFood() {
    //here i connect my variable to the input tag for new food.When i click the button, iam gonna pass whatever in the input tag to my variable with this line
    const newFood = document.getElementById("foodInput").value;
    //console.log(newFood);
    setFoods((prevFoods) => [...prevFoods, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index)); // the "_" as a parameter indicates that the parameter passed to the function is ignored, since in our case we don't use it
  }

  return (
    <>
      <div>
        <h2>List of food</h2>
        <ul>
          {foods.map((food, index) => {
            return (
              <li key={index}>
                {food}
                <button onClick={() => handleRemoveFood(index)}>Delete</button>
              </li>
            );
          })}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter Food Name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}

export default MyComponent2;
