import React, { Component} from "react";
import Loading from "../Components/Loading";
import App from "../App";
import {
  Switch,
  Route
} from "react-router-dom";
import { Spin } from "antd";
import Signin from "../Containers/signin";
import Signup from "../Containers/signup";


export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
  }


  render() {
    const { auth = {} } = this.props;
    const { loading=true } = this.state;
    const authenticated = Object.keys(auth).length > 0 ? true : false;



    // if (loading) {
      // return (
      //   <div className="wp100 hauto flex align-center justify-center">
      //     {/* <Loading /> */}
      //    <Spin size="default" />
      //   </div>
      // );
    // }



    return (
      <div>
        <Switch>

          <Route path="/sign-in" >
            <Signin auth authenticated />
          </Route>
  
         
          <Route path="/sign-up" >
            <Signup auth authenticated />
          </Route>
  
         
          <Route path="/">
            <App authenticated />
          </Route>
        </Switch>
      </div>
    );
  }
}


