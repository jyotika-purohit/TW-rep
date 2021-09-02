import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Signup from "../Components/Signup";
import { doSignin } from "../modules/auth";

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
    doSignin : payload => dispatch(doSignin(payload))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signup)
);
