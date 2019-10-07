import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";

export class Delete extends Component {
  constructor(props) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);

    this.state = {
      title: "",
      description: "",
      dateAdded: "",
      dateUpdated: ""
    };
  }

  onCancel(e) {
    console.log("Cancel Delete");
  }

  onConfirmation(e) {
    console.log("Confirmation");
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`api/Notes/SingleNote/${id}`)
      .then(data => {
        console.log("Data - ", data);
      })
      .catch(error => {
        console.log("Something went wrong! Error: ", error);
      });
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const { history } = this.props;

  //   let note = {
  //     Id: Math.floor(Math.random() * 250),
  //     title: this.state.title,
  //     description: this.state.description,
  //     dateAdded: this.state.dateAdded,
  //     dateUpdated: null
  //   };

  //   fetch("api/Notes/AddNote", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(note)
  //   })
  //     .then(function(resp) {
  //       console.log("Success");
  //       history.push("/notes");
  //     })
  //     .catch(function(error) {
  //       console.log("Something went wrong! ", error);
  //     });
  // }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Delete note confirmation</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add note" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Delete;
