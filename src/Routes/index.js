import React, { Component} from "react";
import Loading from "../Components/Loading";
import App from "../App";
import {
  Switch,
  Route
} from "react-router-dom";
import Signin from "../Containers/signin";
import Signup from "../Containers/signup";
import Header from "../Containers/header";
import DocumentForm from "../Containers/documentForm";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    
  }

  handleOnClick = async (e) => {
    e.preventDefault();
    this.setState({loading:true}) 
    window.setTimeout(() => {
      this.setState({loading:false}) 
    }, 2000)
};


  render() {
    const { auth = {} } = this.props;
    const { loading=false } = this.state;
    const authenticated = Object.keys(auth).length > 0 ? true : false;


    if (loading) {
      return (
        <div style={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",
        justifyContent:"center",alignItems:"center"}} 
        >
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <Switch>

          <Route path="/sign-in" >
          <Header handleOnClick={this.handleOnClick} />

            {
              authenticated
              ?
                <App handleOnClick={this.handleOnClick} authenticated />
             
            :
            <Signin handleOnClick={this.handleOnClick} auth authenticated />
            }
            
          </Route>
  
         
          <Route path="/sign-up" >
            <Header handleOnClick={this.handleOnClick} />

            {
                authenticated
                ?
                  <App handleOnClick={this.handleOnClick} authenticated />
              
              :
              <Signup handleOnClick={this.handleOnClick} auth authenticated />
              }
              
          </Route>
  

         
         
          <Route path="/add-document">
            <Header handleOnClick={this.handleOnClick} />
            {
              authenticated
              ?
                <DocumentForm handleOnClick={this.handleOnClick} authenticated />
          
            :
            <Signin handleOnClick={this.handleOnClick} auth authenticated />
            }
          </Route>

          <Route path="/edit-document">
            <Header handleOnClick={this.handleOnClick} />
            {
              authenticated
              ?
             
                <DocumentForm handleOnClick={this.handleOnClick} authenticated />
           
            :
            <Signin handleOnClick={this.handleOnClick} auth authenticated />
            }
          </Route>


          <Route path="/">
            <Header handleOnClick={this.handleOnClick} />
            {
              authenticated
              ?
                <App handleOnClick={this.handleOnClick} authenticated />
              
            :
            <Signin handleOnClick={this.handleOnClick} auth authenticated />
            }
          </Route>

          
        </Switch>
      </div>
    );
  }
}


