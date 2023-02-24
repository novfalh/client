import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <>
        {" "}
        <section>
          <br />
          <br />
          <br />
          <br />
          <h1 class="large text-primary"> Sign In</h1>
          <p> Login To Your Account </p>

          <form class="form" action="xyz.html">
            <div class="form-group">
              <input type="email" placeholder="Email" name="email" />
            </div>

            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>
            <div class="form-group">
              {" "}
              <input type="submit" value="Login" />
            </div>
          </form>
        </section>
      </>
    );
  }
}
