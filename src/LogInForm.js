import React, { Component } from 'react';
import logo from './logo.svg';
import Route, {Link} from 'react-router-dom';

class LogInForm extends Component{
    constructor(){
        super();
        this.state={
          username:'',
          password:''
        }
    
        this.validate = this.validate.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeusername = this.changeusername.bind(this);
        
      }
    
      validate(){
        console.log("validate !!!");
        if(this.state.password == 'aaa' && this.state.username == 'aaa'){
          alert('User log in!');
          this.props.loginUser();
        }
      }
    
      changePassword(e){
        console.log('change password: '+e.target.value);
        this.setState({
          password:e.target.value
        })
      }
    
      changeusername(e){
        console.log('change username: '+e.target.value);
        this.setState({
          username:e.target.value
        })
      }
    
      render() {
        return (
          <div className="App">
            <h1>Title</h1>
            <div>
              <h3>Login form</h3>
              <label>
                Username 
                <br/>
                <input value={this.state.username} onChange={this.changeusername} type="email"></input>
              </label>
              <br/>
              <label>
                Password <br/>
                <input value={this.state.password} onChange={this.changePassword} type="password"/>
              </label>
              <br/>
              <button  onClick={this.validate}>Log in</button>
            </div>
    
          </div>
        );
      }
}

export default LogInForm;