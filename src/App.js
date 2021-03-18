import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import EmployList from './container/EmployList/EmployList'
import AccountDetails from './container/AccountDetails/AccountDetails'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from 'react-redux';
import { store, history } from './Redux/store';



const App =() =>{
  return (
    <Provider store={store}>
    <Router history={history}>
        <Switch>
        <Route exact path="/list" name="List Page" component={EmployList} />
        <Route exact path="/" name="home" component={AccountDetails} />
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;
