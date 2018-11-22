import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link, Redirect} from 'react-router-dom';
import LogInForm from './LogInForm'
import Dashboard from './Dashboard'

class App extends Component {
  constructor(){
    super();
    this.state={
      loggedin:false
    }
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(){
    console.log('The user is logged in !!!');
    this.setState({
      loggedin:true
    })

  }

  render(){
    if(this.state.loggedin){
      return <Redirect to="/Dashboard"></Redirect>
    }
    return(
      <div>
        <h3>Title</h3>
        <Route path="/" exact render={() => 
            {
              return <LogInForm loginUser={this.loginUser}/>          
            }
          }
        ></Route>

        <Route path="/Dashboard" exact render={() => 
            {
              return <Dashboard />          
            }
          }
        ></Route>
      </div>
    )
  }
}

export default App;
