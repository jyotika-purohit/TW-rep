import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Routes from "../Routes/index";
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
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Routes)
);
