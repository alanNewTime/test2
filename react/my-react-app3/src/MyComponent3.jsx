import React, { useState } from "react";

function MyComponent3() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear()); // as defaul value, i give the current year
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    //console.log(newCar);
    setCars((prevCars) => [...prevCars, newCar]); //here we pregressively add one car object at the time

    //the three line below reset my values after i add the car object
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index)); // the "_" as a parameter indicates that the parameter passed to the function is ignored, since in our case we don't use it
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <>
      <div>
        <h2>List of car objects</h2>
        <ul>
          {cars.map((car, index) => {
            return (
              <li key={index}>
                {car.year} {car.make} {car.model}
                <button onClick={() => handleRemoveCar(index)}>delete</button>
              </li>
            );
          })}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} />
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="Enter Car Make"
        />
        <br />
        <input
          type="text"
          value={carModel}
          onChange={handleModelChange}
          placeholder="Enter Car Model"
        />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent3;
