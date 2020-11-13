import './App.css';
import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Exam from './Exam.js'
import Login from './Login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <Provider store={store}>
      <div className="App">
      <Router >          
          <Switch>
            <Route exact path="/" >
              <Login></Login>
            </Route>
            <Route exact path="/exam">
              <Exam></Exam>
            </Route>
        </Switch>
        </Router>
      </div>
    </Provider>
  }
}
export default App; 
