import React , {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import CreateUser from "./components/createuser.component"
import CreateExercise from "./components/createexercise.component"
import ExercisesList from "./components/exerciselist.component"
import EditExercise from "./components/editexercise.component"

class App extends Component{
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Navbar />
            <br/>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />

          </div>
        </Router>
      </div>
    )
  }
}

export default App;
