import PropTypes from "prop-types";

function UserGreeting(props) {
  if (props.IsLogged) {
    return <h1 className="box">welcome {props.name}</h1>;
  } else {
    return <h1 className="box">you are not logged in</h1>;
  }
}

UserGreeting.propTypes = {
  IsLogged: PropTypes.bool,
  name: PropTypes.string,
};

UserGreeting.defaultProps = {
  IsLogged: false,
  name: "user",
};

export default UserGreeting;
