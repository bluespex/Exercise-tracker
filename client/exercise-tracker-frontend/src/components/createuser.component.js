import React, { Component } from 'react';
import axios from 'axios'


export default class CreateUser extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      username: "",
      name: "",
      users: []  
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5500/user')
      .then(res => {
        this.setState({
          users:  res.data
        })
        console.log(this.state.users)
      })
      .catch(err => {
        console.log(err)
      })  
  }

  // deleteUser = (ID) => {
  //   console.log(ID)
  // }

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


        <h2>USERS</h2>
        <div className="card-group">
          {
            this.state.users.map( (val , i , a) => {
              return (
                <div className="card text-white bg-dark mb-3 m-1" key={i}>
                  <div className="card-body">
                    <h5 className="card-title">{val.username}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{val.createdAt}</h6>
                    {/* <button onClick={()=>{this.deleteUser(val._id)}} className="btn btn-primary mb-2" >DELETE</button> */}

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