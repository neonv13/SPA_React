import React, { useState } from "react";
import * as action from "../actions/actions.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Select from "react-select"
import { Button } from 'react-bootstrap';
import { useEffect } from "react";

const BuyTicket = () => {
    let {id} = useParams();
    let idInt = parseInt(id)
    const dispath = useDispatch();
    useEffect(() => {
        dispath(action.showAllshows());
    },[])
    const data = useSelector(state => state.showReducer)
    const show = data.filter(val => val.id === idInt)
    .map(value => {
        return(
            
            <div className="buy-ticket">
            <div className="buy-ticket-show-info">
                <p>Data: {value.date}</p>
                <p>Godzina: {value.time}</p>
                <p>Sala: {value.hall.number}</p>
            </div>
            <div className="buy-ticket-name">
                <p>Film: {value.film.name}</p>
            </div>
            <div className="buy-ticket-input">
            <label>Wybierz miejsce</label>
            <input type="number"></input>
            </div>
            <div className="buy-ticket-button">
            <Button size="lg">Kup bilet</Button>
            </div>
            <div className="booked-seats">
            <p>MIEJSCE NA GRAFICZNE PRZEDSTAWIENIE SIEDZEN</p>
            </div>
            </div>

            
        );
    })
        
   return(
    <div className="buy-ticket-container">
            {show}
           </div>
                
   );
}
export default BuyTicket;