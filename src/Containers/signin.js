import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Signin from "../Components/Signin";
import { doSignIn } from "../modules/auth";

const mapStateToProps = state => {
  const {
      auth = {},
      users = {}
  } = state;
  

  return {
    auth,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSignIn : payload => dispatch(doSignIn(payload)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signin)
);
