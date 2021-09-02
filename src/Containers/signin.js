import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Signin from "../Components/Signin";
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
  connect(mapStateToProps, mapDispatchToProps)(Signin)
);
