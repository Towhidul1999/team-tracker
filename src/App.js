
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./component/Home/Home";
import Nomatch from "./component/Nomatch/Nomatch";
import TeamDetail from "./component/TeamDetail/TeamDetail";




function App() {

  return (
    <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>

          <Route path="/id/:id">
            <TeamDetail></TeamDetail>
          </Route>
          
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
