function List2() {
  //array created
  const students = [
    { id: 1, name: "alan", age: 24 },
    { id: 2, name: "teodoro", age: 23 },
    { id: 3, name: "marta", age: 22 },
    { id: 4, name: "chiara", age: 21 },
  ];

  //mapping each element of the array (form of explosion)
  const studentItems = students.map((student) => {
    return (
      <li key={student.id}>
        {student.name} {student.age}
      </li>
    );
  });

  //returning the mapped array
  return <ol>{studentItems}</ol>;
}

export default List2;
