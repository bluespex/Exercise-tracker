import React, { Component } from 'react';
import axios from 'axios'

export default class ExercisesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5500/exercise')
      .then(res => {
        this.setState({
          exercises:  res.data
        })
        console.log(this.state.exercises)
      })
      .catch(err => {
        console.log(err)
      })
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label className="sr-only" >Username</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" onChange={this.onChangeUsername}/>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">TRAIN HARD</button>
            </div>
          </div>
        </form>
        <br/>

        <p>exercise routine for username</p>

      </div>
    )
  }
}