import React, { useState, useEffect } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button, Modal} from 'react-bootstrap'
import AddShowForm from "../form/AddShowForm.js";
import EditShow from "../EditShow"
import { Link } from "react-router-dom";


const ShowList = () => {

    const dispath = useDispatch();
    const data = useSelector(state => state.showReducer);
    const filmAsObject = { name: "dsadsa", duration: 13, img_src: "blalalal" }
    const hallAsObject = { number: 32132, capacity: 130 }
    useEffect(() => {
        dispath(action.showAllHalls());
        dispath(action.showAllFilms());
        dispath(action.showAllshows());
    },[])

    const [show, setShow] = useState(false);
    const [record,setRecord] = useState({})
    const handleClose = () => setShow(false);
    function handleShow(id,film,hall,date,time,tickets_sold,booked_seats){
        setShow(false);
        setRecord({id:id,film:film,hall:hall,date:date,time:time,tickets_sold:tickets_sold,booked_seats:booked_seats})
         setShow(true);
         console.log(record)
    }

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
            <td><Button variant="danger" size="sm" onClick={() => dispath(action.deleteShow(value.id))}>Usuń seans</Button></td>
            <td><Button size = "sm" onClick={() => handleShow(value.id,value.film,value.hall,value.date,value.time,value.tickets_sold,value.booked_seats)} >Edytuj seans</Button></td>
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
        <h1>Dodawanie seansu</h1>
       <AddShowForm/>
       {show === true && 
       <div>
           <h1>Edycja seansu</h1>
           <EditShow record = {record}/>
       </div>
        
       }
       </div>
       </div>
    )
}
export default ShowList;