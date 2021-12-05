import React, { useState, useEffect } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddShowForm from "../form/AddShowForm.js";
import EditShow from "../EditShow"


const ShowList = () => {

    const dispath = useDispatch();
    const data = useSelector(state => state.showReducer);
    useEffect(() => {
        dispath(action.showAllHalls());
        dispath(action.showAllFilms());
        dispath(action.showAllshows());
    },[])
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.film.name}</td>
            <td>{value.hall.number}</td>
            <td>{value.date}</td>
            <td>{value.time}</td>
            <td>{value.tickets_sold}</td>
            <td>{value.booked_seats}</td>
            <td><Button variant="danger" size="sm" onClick={() => dispath(action.deleteShow(value.id))}>Usuń seans</Button>
            <Button size = "sm" >Edytuj seans</Button></td>
            </tr>
            
        )
    })
    return(
        <div className="show-list">
        <div className="show-list-element">
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id seansu</th>
                <th>Nazwa filmu</th>
                <th>Sala</th>
                <th>Data</th>
                <th>Godzina</th>
                <th>Sprzedane bilety</th>
                <th>Zarezerwowane miejsca</th>
            </tr>
        </thead>
       <tbody>
           {list}
       </tbody>
       </Table>
       </div>
       <div className="show-list-element">
       <AddShowForm/>
       </div>
       </div>
    )
}
export default ShowList;