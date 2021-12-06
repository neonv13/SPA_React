import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import * as action from "./actions/actions.js";
import {createStore, compose, applyMiddleware} from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//store.subscribe(() => console.log(store.getState()));
const mapStateToProps = (state) => { 
  return  {...state}; 
}; 
const mapDispatchToProps = (dispatch) => { 
  return { 
    showAllFilms: () => dispatch(action.showAllFilms()),
    showAllHalls: () => dispatch(action.showAllHalls()),
    showAllShows: () => dispatch(action.showAllshows())
  } 
}; 


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

