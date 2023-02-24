import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <>
        <section class="container">
          <h1 class="x-large text-primary">Sign Up</h1>
          <p class="lead">
            <i class="fa fa-user-circle-o"></i>Create your Account
          </p>
          <form class="form">
            <div class="form-group">
              <input type="text" placeholder="Enter the Name" name="name" />
            </div>
            <div class="form-group">
              <input type="email" placeholder="enter your email" name="email" />
              <small>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" name="password" />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
              />
            </div>
            <div class="form-group">
              <input type="date" name="dob" placeholder="Enther DOB" />
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
