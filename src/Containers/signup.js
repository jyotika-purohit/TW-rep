import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Signup from "../Components/Signup";
import { doSignUp } from "../modules/users";

const mapStateToProps = state => {
  const {
      auth = {}
  } = state;
  

  return {
    auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSignUp:payload => dispatch(doSignUp(payload))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signup)
);
