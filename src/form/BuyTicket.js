import React, { useState } from "react";
import * as action from "../actions/actions.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Select from "react-select"
import { Button, Row } from 'react-bootstrap';
import { useEffect } from "react";

const BuyTicket = () => {
    let { id } = useParams();
    let idInt = parseInt(id)
    const dispath = useDispatch();
    useEffect(() => {
        dispath(action.showAllshows());
    }, [])
    function buy_ticket(id,film,hall,date,time,tickets_sold,booked_seats,seat){
        booked_seats[seat - 1] = true;
        tickets_sold ++;
        const filmAsObject = { name: film.name, duration: film.duration, img_src: film.img_src }
        const hallAsObject = { number: hall.number, capacity: hall.capacity }
        dispath(action.showModified(id,filmAsObject,hallAsObject,date,time,tickets_sold,booked_seats));
    }
    const data = useSelector(state => state.showReducer)
    const show = data.filter(val => val.id === idInt)
        .map(value => {
            return (

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
                        <form onSubmit={ () => buy_ticket(value.id,value.film,value.hall,value.date,value.time,value.tickets_sold,value.booked_seats,document.getElementById("seat-id").value)}>
                        <label>Wybierz miejsce</label>
                        <input type="number" id="seat-id" max={value.booked_seats.length} min = "1"></input>
                    <div className="buy-ticket-button">
                        <Button size="lg" type="submit">Kup bilet</Button>
                    </div>
                    {console.log(value.booked_seats)}
                    </form>
                    </div>
                    
                    <div className="buy-ticket-seats">
                    <Row xs={1} md={5} className="g-4">
                    {value.booked_seats.map((val,index) => {
                        if(val === false) return (
                        <div style={{width : "150px"}}> 
                        <p style={{backgroundColor: "green"}}>{index + 1}</p>
                        </div>
                        )
                        else return(
                            <div style={{width : "150px"}}> 
                             <p style={{backgroundColor: "red"}}>{index + 1}</p>
                            </div>
                        )
                       
                    })}
                    </Row>
                    </div>

                </div>


            );
        })


    return (
        <div className="buy-ticket-container">
            {show}
        </div>

    );
}
export default BuyTicket;