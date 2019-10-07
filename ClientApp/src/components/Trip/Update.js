import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link, withRouter } from "react-router-dom";

export class Update extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            name: '',
            description: '',
            dateStarted: '',
            dateCompleted: null
        }
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
      let trip = 
      { 
        Id: Math.floor(Math.random() * 250),
        name: this.state.name,
        description: this.state.description,
        dateStarted: this.state.dateStarted,
        dateCompleted: this.state.dateCompleted
      }
      
      console.log("Trip date - ", trip);

      fetch('api/Trips/UpdateTrip', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(trip)
        })
        .then(function(resp){
            history.push('/trips');
        }).catch(function(error){
            console.log('Something went wrong! ', error);
        });
      }
   
    render() {
        return (
            <div className="trip-from" >
                <h3>Update trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.title}
                          onChange={this.onChangeName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea type="text" 
                          className="form-control"
                          value={this.state.description}
                          onChange={this.onChangeDescription}
                          />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
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
                            <label>Date of completion:  </label>
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
                        <input type="submit" value="Add trip" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
  }

  export default Update;