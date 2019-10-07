import React, { Component } from 'react';

export class AllNotes extends Component {
  static displayName = AllNotes.name;

  constructor(props) {
    super(props);
    this.onNoteUpdate = this.onNoteUpdate.bind(this);
    this.onNoteDelete = this.onNoteDelete.bind(this);

    this.state = 
    { 
      notes: [], 
      loading: true 
    };
  }

  componentDidMount() {
    this.populateNotesData();
  }

  onNoteUpdate(){
    console.log('Note id, ');
  }
  
  onNoteDelete(){
    console.log('Note id, ');
  }

  static renderAllNotesTable(notes) {
    return (
      <table className='table table-striped'>
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
          {notes.map(note =>
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>{note.dateAdded}</td>
              <td>{note.dateUpdated}</td>
              <td key={note.id}>
                <div className="form-group">
                    <input type="button" value="Update" className="btn btn-success" onClick={this.onNoteUpdate}/>
                    <input type="button" value="Delete" className="btn btn-danger" onClick={() => this.onNoteDelete} />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : AllNotes.renderAllNotesTable(this.state.notes);

    return (
      <div>
        <h1>All notes</h1>
        <p>Here you will see a list of all notes.</p>
        {contents}
      </div>
    );
  }

  async populateNotesData() {
    const response = await fetch('api/Notes/GetNotes');
    const data = await response.json();
    this.setState({ notes: data, loading: false });
  }
}
