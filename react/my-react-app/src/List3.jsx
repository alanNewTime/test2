import PropTypes from "prop-types";

function List3(props) {
  //i receive the array of objects as prop and save it in a variable
  const listItems = props.items;
  const category = props.category;

  //mapping each element of the array (form of explosion)
  const mappedItems = listItems.map((item) => {
    return (
      <li key={item.id}>
        {item.name} {item.age}
      </li>
    );
  });

  //returning the mapped array
  return (
    <>
      <div className="container">
        <h3>{category}</h3>
        <ol>{mappedItems}</ol>
      </div>
    </>
  );
}

List3.defaultProps = {
  category: "Category",
  items: [],
};

List3.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
    })
  ),
};

export default List3;
