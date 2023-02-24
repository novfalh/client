import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>DevConnector &copy; {new Date().getFullYear()}</footer>
      </>
    );
  }
}
