function Button() {
  // function without parameters
  const handleClick = () => {
    console.log("clicked");
  };

  let count = 0;
  //function  with parameter
  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} that is enough clicking for today`);
    }
  };

  //the event parameter
  const handleClick3 = (e) => {
    console.log(e); //vedo tutte le funzioni disponibilki con event
    e.target.textContent = "effetto event"; //cambio testo dentro il pulsante dopo il click
  };

  return (
    <>
      <button onClick={handleClick}>Click me (no parameter)</button>
      <br />
      <button onClick={() => handleClick2("alan")}>
        Click me too (general parameter)
      </button>
      <br />
      <button onClick={(e) => handleClick3(e)}>
        click me (event parameter)
      </button>
    </>
  );
}

export default Button;
