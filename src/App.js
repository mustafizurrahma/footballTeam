import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TeamDetails from "./components/teamDetails/TeamDetails";
import Teams from "./components/teams/Teams";
import './App.css'

function App() {
  return (
    <div className="container-fluid p-0">
      <Router>
        <Switch>
          <Route path="/teams">
            <Teams></Teams>
          </Route>
          <Route path="/:teams">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exect path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
