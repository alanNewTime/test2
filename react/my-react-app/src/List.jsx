function List() {
  //array created
  const fruits = ["apple", "mango", "ananas", "guava"];

  //mapping each element of the array (form of explosion)
  const listItems = fruits.map((fruit) => {
    return <li>{fruit}</li>;
  });

  //returning the mapped array
  return <ol>{listItems}</ol>;
}

export default List;
