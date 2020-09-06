import React, { Component } from 'react';
import axios from 'axios'


export default class CreateUser extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      username: "",
      name: ""  
    }
  } 
  onChangeUsername = (e)=>{
    this.setState({
      username: e.target.value
    })
  }

  onChangeName = (e)=>{
    this.setState({
      name: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username)  
    const newUser = {
      username: this.state.username
    }

    axios.post('http://localhost:5500/user/add', newUser)
      .then(res => console.log(res.data));
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label className="sr-only" >Name</label>
              <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" onChange={this.onChangeName}/>
            </div>
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
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}