import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar here */}
        <div className="content">
          <Switch>
            <Route exact path= "/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


//  Notes
//Turn on app
//    npm start

//Turn on json server
//    npx json-server --watch data/db.json --port 8000
//    -- still not having connection to app(just runn app)
