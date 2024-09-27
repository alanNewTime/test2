import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "mustang",
  });

  function handleYearChange(event) {
    setCar((prevCar) => ({ ...prevCar, year: event.target.value })); //using updater function
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <>
      <div>
        <p>
          Your favourite car is: {car.year} {car.make} {car.model}
          <div></div>
          <input type="number" value={car.year} onChange={handleYearChange} />
          <br />
          <input type="text" value={car.make} onChange={handleMakeChange} />
          <br />
          <input type="text" value={car.model} onChange={handleModelChange} />
          <br />
        </p>
      </div>
    </>
  );
}

export default MyComponent;
