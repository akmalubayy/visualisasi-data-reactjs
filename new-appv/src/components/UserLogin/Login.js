  import React, { Component, useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';

  class Login extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.submitForm = this.submitForm.bind(this)
        const token = localStorage.getItem('token')
  
        let loggedIn= true
        if(token == null){
            loggedIn = false
        }
        
          this.state = {
              username:'',
              password:''
          }
      }
  
  
    onChangeUserName(e) {
      this.setState({ username: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
}
  
    submitForm(e){
      e.preventDefault()

      const userObject = {
          username: this.state.username,
          password: this.state.password
      };
  
      axios.post('http://localhost:8080/api/login/', userObject)
          .then((res) => {
              console.log(res.data)
              console.log('1-----cek')
              localStorage.setItem('token', res.data.api_key);
  
              console.log(res.data.api_key)
          }).catch((error) => {
              console.log(error)
          });
  
      this.setState({ username: '',
                      password: '',
                      loggedIn: true
                    
          })
  }
  
    render(){
        if(this.state.loggedIn){
          return <Redirect to="/main-dashboard"/>
        }
        return(
    <div className="Login">
      <form onSubmit={this.submitForm}>
      {/* <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
          <br/>
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
          <br/>
          <input type="submit"/>
          <br/> */}
      <h1 style={{fontSize:25, fontWeight:'bold'}}>Login</h1>
        <FormGroup bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            name="username"
            type="text"
            // value={this.state.username}
            onChange={this.onChangeUserName}
          />
        </FormGroup>
        <FormGroup bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            name="password"
            // value={this.state.password}
            onChange={this.onChangePassword}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
  }

export default Login;