import Home from "./view/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navbar";
// import AddFilmForm2 from "./form/AddFilmForm2.js"
import MovieList from "./view/MovieList"
import HallList from "./view/HallList"
import ShowList from "./view/ShowList"
// import EditShow from "./EditShow";
import BuyTicket from "./form/BuyTicket";
import {useSelector, useDispatch} from "react-redux";
import * as action from "./actions/actions.js";
import ShowListToday from "./view/ShowListToday";
import ShowOnGoing from "./view/ShowOnGoing";



function App() {
  const dispath = useDispatch();

  function addMovieHandler(nameToUpperCase,duration,img_src){
    dispath(action.addFilm(nameToUpperCase,duration,img_src));
  }
  function deleteMovieHandler(id,name){
    dispath(action.deleteFilm(id));
  }
  function getAllMovieHandler(){
    dispath(action.showAllFilms());
  }
  function addHallHandler(number, capacity){
    dispath(action.addHall(number, capacity));
  }
  function deleteHallHandler(id){
    dispath(action.deleteHall(id));
  }
  function getAllHallHandler(){
    dispath(action.showAllHalls());
  }
  function addShowHandler(filmAsObject, hallAsObject, date, time, booked_seats){
    dispath(action.addShow(filmAsObject, hallAsObject, date, time, 0, booked_seats));
  }
  function deleteShowHandler(id){
    dispath(action.deleteShow(id));
  }
  function getAllShowHandler(){
    dispath(action.showAllshows());
  }
  function editShowHandler(id,filmAsObject,hallAsObject,date,time){
    dispath(action.showModified(id,filmAsObject,hallAsObject,date,time,0,0));
  }


  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/today">
            <ShowListToday /></Route>
          <Route exact path="/ongoing">
            <ShowOnGoing /></Route>
          <Route path = '/films' component={() => 
          <MovieList addMovieHandler= {addMovieHandler} deleteMovieHandler = {deleteMovieHandler} getAllMovieHandler = {getAllMovieHandler}/>}></Route>
          <Route path = '/halls' component={() => 
          <HallList addHallHandler = {addHallHandler} deleteHallHandler = {deleteHallHandler} getAllHallHandler = {getAllHallHandler}/>}></Route>
          <Route path = '/shows' component={() => 
          <ShowList addShowHandler = {addShowHandler} deleteShowHandler = {deleteShowHandler} 
          getAllShowHandler = {getAllShowHandler}
          getAllHallHandler = {getAllHallHandler}
          getAllMovieHandler = {getAllMovieHandler}
          editShowHandler = {editShowHandler}/>}></Route>
          <Route exact path='/buy_ticket/:id' name="buy_ticket" component={() => <BuyTicket/>}></Route>

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
