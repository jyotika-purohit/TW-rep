import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../Components/Header";
import { doSignOut } from "../modules/auth";

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
    doSignOut : () => dispatch(doSignOut()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
