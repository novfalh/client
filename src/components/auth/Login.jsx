import React, { Component } from "react";
import api from "../../utils/api";

export default class Login extends Component {

  constructor() {
    //to give a call to the base class constructor
     super();
 
     //state: its an object from the base class i.e Component class to hold the data for our component.
     this.state = {
       email: "",
       password: "",
       
     };
   }

   onChange = (e)=>{

    this.setState({ [e.target.name]: e.target.value });
     // we need to collect data for every changed field
    // we need toupdate the state accordingly 
    //console.log(e.target.value);
    //e: event
    //target: locationwhere event happend
    //value: whatever the input that we provided it will give us the data
   
    //console.log(e.target.name);
    // name field value of the input tag 
  };

  onSubmit= (e)=> {

    e.preventDefault();
    console.log(this.state);

    api.post('/auth', this.state).then((res) => console.log(res.data)).catch();
  };


  render() {

     //destructuring the state object
     const {email, password} = this.state;

    return (
      <>
        {" "}
         <section class="container">
      <div class="alert alert-danger">
        Invalid credentials
      </div>
      <h1 class="large text-primary">Sign In</h1>
      <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
      <form class="form" action="dashboard.html" onSubmit={this.onSubmit}>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email} onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={this.onChange}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>

      </>
    );
  }
}


