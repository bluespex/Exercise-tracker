import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

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

  deleteExercise = (ID)=>{
    console.log(ID)
    axios.delete(`http://localhost:5500/exercise/delete/${ID}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    window.location = '/';  
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

        <h2>Exercise Routine</h2>
        <div className="card-deck">
          {
            this.state.exercises.map( (val , i , a) => {
              return (
                <div className="card text-white bg-dark mb-3 m-1" key={i}>
                  <div className="card-body">
                    <h5 className="card-title">{val.description}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{val.username}</h6>
                    <p className="card-text">Duration : {val.duration} </p>
                    <p className="card-text">Date : {val.date} </p>
                    <button onClick={()=>{this.deleteExercise(val._id)}} className="btn btn-primary mb-2 m-2" >DELETE</button>
                    <Link to={"/edit/"+val._id}>
                      <button className="btn btn-primary mb-2 m-2" >EDIT</button>
                    </Link>

                  </div>
                </div>
              );
            })
          }
        </div>

      </div>
    )
  }
}