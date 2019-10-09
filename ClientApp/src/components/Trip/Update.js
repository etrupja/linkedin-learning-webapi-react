import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
    this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateCancel = this.onUpdateCancel.bind(this);

    this.state = {
      name: "",
      description: "",
      dateStarted: "",
      dateCompleted: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`api/Trips/SingleTrip/${id}`).then(trip => {
      const response = trip.data;
      this.setState({
        name: response.name,
        description: response.description,
        dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
        dateCompleted:response.dateCompleted ?  new Date(response.dateCompleted)
          .toISOString()
          .slice(0, 10) : null
      });
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDateStarted(e) {
    this.setState({
      dateStarted: e.target.value
    });
  }

  onChangeDateCompleted(e) {
    this.setState({
      dateCompleted: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    const { id } = this.props.match.params;

    console.log(this.state);

    var reqBody = {
      name: this.state.name,
      description: this.state.description,
      dateStarted: new Date(this.state.dateStarted).toISOString(),
      dateCompleted: this.state.dateCompleted
        ? new Date(this.state.dateCompleted).toISOString()
        : null
    };
    console.log(reqBody);

    axios.put("api/Trips/UpdateTrip/" + id, reqBody).then(
      result => {
        console.log(result);
        history.push("/trips");
      },
      error => {
        console.log("Trip could not be updated! Error: ", error);
      }
    );
  }

  onUpdateCancel() {
    const { history } = this.props;
    history.push("/trips");
  }

  render() {
    return (
      <div className="trip-from">
        <h3>Update trip</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Trip name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Trip description: </label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="row">
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Date of start: </label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.dateStarted}
                  onChange={this.onChangeDateStarted}
                />
              </div>
            </div>
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Date of completion: </label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.dateCompleted}
                  onChange={this.onChangeDateCompleted}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button onClick={this.onUpdateCancel} class="btn btn-default">
              Cancel
            </button>
            <button type="submit" class="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Update;
