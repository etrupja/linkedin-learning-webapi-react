import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

export class Delete extends Component {
  constructor(props) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);

    this.state = {
      name: "",
      description: "",
      dateAdded: "",
      dateUpdated: ""
    };
  }

  onCancel(e) {
    const { history } = this.props;
    history.push("/trips");
  }

  onConfirmation(e) {
    const { id } = this.props.match.params;
    const { history } = this.props;

    axios
      .delete("api/Trips/DeleteTrip/" + id)
      .then(result => {
        console.log("Trip deleted!");
        history.push("/trips");
      })
      .catch(error => {
        console.log("Trip could not be deleted!");
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`api/Trips/SingleTrip/${id}`).then(trip => {
      const response = trip.data;
      console.log("Single Trip - ", response);
      this.setState({
        name: response.name,
        description: response.description,
        dateAdded: response.dateAdded,
        dateUpdated: response.dateUpdated,
        loading: false
      });
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Delete trip confirmation</h2>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{this.state.name}</h4>
            <p class="card-text">{this.state.description}</p>
            <button onClick={this.onCancel} class="btn btn-default">
              Cancel
            </button>
            <button onClick={this.onConfirmation} class="btn btn-danger">
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete;
