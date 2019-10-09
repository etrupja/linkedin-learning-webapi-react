import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getAllTrips } from "../../actions/tripActions";

export class Trips extends Component {
  static displayName = Trips.name;

  constructor(props) {
    super(props);
    this.onTripUpdate = this.onTripUpdate.bind(this);
    this.onTripDelete = this.onTripDelete.bind(this);

    this.state = {
      trips: [],
      loading: true
    };
  }

  componentDidMount() {
    // this.populateTripsData();
    this.props.getAllTrips();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trips.data !== this.props.trips.data) {
      this.setState({ trips: this.props.trips.data });
    }
  }

  onTripUpdate(id) {
    const { history } = this.props;
    history.push("/update/" + id);
  }

  onTripDelete(id) {
    const { history } = this.props;
    history.push("/delete/" + id);
  }

  renderAllTripsTable(trips) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date started</th>
            <th>Date completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {trips.map(trip => ( */}
          {trips.map(trip => (
            <tr key={trip.id}>
              <td>{trip.name}</td>
              <td>{trip.description}</td>
              <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
              <td>
                {trip.dateCompleted
                  ? new Date(trip.dateCompleted).toISOString().slice(0, 10)
                  : "-"}
              </td>
              <td key={trip.id}>
                <div className="form-group">
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-success"
                    onClick={() => this.onTripUpdate(trip.id)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => this.onTripDelete(trip.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    // let contents = this.props.loading ? (
    //   <p>
    //     <em>Loading...</em>
    //   </p>
    // ) : (
    //   this.renderAllTripsTable(this.state.trips)
    // );

    let contents = this.props.trips.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.state.trips.length && this.renderAllTripsTable(this.state.trips)

      // this.renderAllTripsTable(this.state.trips)
    );

    return (
      <div>
        <h1>All trips</h1>
        <p>Here you will see a list of all trips.</p>
        {contents}
      </div>
    );
  }
  // populateTripsData() {
  //   axios.get("api/Trips/GetTrips").then(res => {
  //     const response = res.data;
  //     this.setState({ trips: response, loading: false });
  //   });
  // }
}

//allows to access data from store. Connects store as argument and use props. to get app state and get new value
const mapStateToProps = ({ trips }) => ({
  trips
});

export default connect(
  mapStateToProps,
  { getAllTrips }
)(Trips);
