import React, { Component } from "react";

export class Notes extends Component {
  static displayName = Notes.name;

  constructor(props) {
    super(props);
    this.onNoteUpdate = this.onNoteUpdate.bind(this);
    this.onNoteDelete = this.onNoteDelete.bind(this);

    this.state = {
      notes: [],
      loading: true
    };
  }

  componentDidMount() {
    this.populateNotesData();
  }

  onNoteUpdate(id) {
    console.log("Update: ", id);
    const { history } = this.props;
    history.push("/update/" + id);
  }

  onNoteDelete(id) {
    console.log("Delete: ", id);

    const { history } = this.props;
    history.push("/delete/" + id);
  }

  renderAllNotesTable(notes) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date added</th>
            <th>Date updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>{note.dateAdded}</td>
              <td>{note.dateUpdated}</td>
              <td key={note.id}>
                <div className="form-group">
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-success"
                    onClick={() => this.onNoteUpdate(note.id)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => this.onNoteDelete(note.id)}
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
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderAllNotesTable(this.state.notes)
    );

    return (
      <div>
        <h1>All notes</h1>
        <p>Here you will see a list of all notes.</p>
        {contents}
      </div>
    );
  }

  async populateNotesData() {
    const response = await fetch("api/Notes/GetNotes");
    const data = await response.json();
    this.setState({ notes: data, loading: false });
  }
}
