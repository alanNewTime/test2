import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        {/*this is where the dynamic conection is made between our color panel and the big screen */}
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color </label>
        {/*this is where the dynamic conection is made between our color panel and the small screen */}
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}

export default ColorPicker;
