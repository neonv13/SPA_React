import Home from "./view/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navbar";
import AddFilmForm2 from "./form/AddFilmForm2.js"
import MovieList from "./view/MovieList"
import HallList from "./view/HallList"
import ShowList from "./view/ShowList"
import EditShow from "./EditShow";
import BuyTicket from "./form/BuyTicket";



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path = '/films' component={MovieList}></Route>
          <Route path = '/halls' component={HallList}></Route>
          <Route path = '/shows' component={ShowList}></Route>
          <Route exact path='/buy_ticket/:id' name="buy_ticket" component={BuyTicket}></Route>

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
