import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Routes from "./Containers/routes";
import {
  BrowserRouter as Router
} from "react-router-dom";
 
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from "./configStore";

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes/>
        </Router>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

