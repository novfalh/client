import React, { Component } from "react";
import api from "../../utils/api";
export default class Register extends Component {

  constructor() {
   //to give a call to the base class constructor
    super();

    //state: its an object from the base class i.e Component class to hold the data for our component.
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

    api.post('/users', this.state);
    // end point
    // data
    // header specification
  };

  render() {

    //destructuring the state object
    const { name, email, password, confirmPassword} = this.state;

    return (
      <>
        <section class="container">
          <h1 class="x-large text-primary">Sign Up</h1>
          <p class="lead">
            <i class="fa fa-user-circle-o"></i>Create your Account
          </p>
          <form class="form" onSubmit={this.onSubmit}>
            <div class="form-group">
              <input type="text" placeholder="Enter the Name" name="name" required value={name} onChange={this.onChange} />
            </div>
            <div class="form-group">
              <input type="email" placeholder="enter your email" name="email" value={email} onChange={this.onChange}   />
              <small>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword} onChange={this.onChange}
              />
            </div>
          
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Register" />
            </div>
          </form>
        </section>
      </>
    );
  }
}
