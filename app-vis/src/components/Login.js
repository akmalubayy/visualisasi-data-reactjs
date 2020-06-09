import React, {Component, useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
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

  
      //     this.onChange = this.onChange.bind(this)
      //     this.submitForm = this.submitForm.bind(this)
      // }


      onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }
  

    onChangePassword(e) {
      this.setState({ password: e.target.value })
  }
      // onChange(e){
  //   this.setState({
  //       [e.target.name]: e.target.value
  //   })
  // }

  // Login Logic
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
        return <Redirect to="/admin"/>
      }
    return(
      <div>
        <h1>Login Page</h1>

        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChangeUserName}/>
          <br/>
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChangePassword}/>
          <br/>
          <input type="submit"/>
          <br/>

        </form>
      </div>
    )
  }
}

export default Login;