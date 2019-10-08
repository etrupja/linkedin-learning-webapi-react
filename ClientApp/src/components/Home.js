import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Trips manager!</h1>
        <p>Keep track of your trips, by:</p>
        <ul>
          <li>Adding new trips</li>
          <li>Updating trips</li>
          <li>Deleting trips</li>
          <li>Viewing all trips</li>
        </ul>
      </div>
    );
  }
}
