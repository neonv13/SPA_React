import React, { useState, useEffect } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button, Modal} from 'react-bootstrap'
import AddShowForm from "./form/AddShowForm.js";

const EditShow = (record) => {
    
    const dispath = useDispatch();
    const movies = useSelector(state => state.filmReducer);
    const halls = useSelector(state => state.hallReducer);
    const data = useSelector(state => state.showReducer);
    function editFullData(id, filmName, hallName, date, time) {
        const film = movies.filter(value => value.name === filmName)
        const hall = halls.filter(value => value.number === hallName)
        const filmAsObject = { name: film[0].name, duration: film[0].duration, img_src: film[0].img_src }
        const hallAsObject = { number: hall[0].number, capacity: hall[0].capacity }
        let booked_seats = 0

        dispath(action.showModified(id,filmAsObject,hallAsObject,date,time,0,0));
    }
    function getCurrentDate() {
        var myDate = new Date();
        var year = myDate.getFullYear();

        var month = myDate.getMonth() + 1;
        if (month <= 9)
            month = '0' + month;

        var day = myDate.getDate() + 1;
        if (day <= 9)
            day = '0' + day;

        return year + '-' + month + '-' + day;
    }
       return (
        <div>
        <form name="editShowForm" onSubmit={() => editFullData(record.record.id, document.getElementById("editShowFilm").value, document.getElementById("editShowHall").value
                , document.getElementById("editShowDate").value, document.getElementById("editShowTime").value)}>
            <label>Nazwa filmu</label>
            <select id="editShowFilm">
                <option selected disabled hidden defaultValue={record.record.film.name}>{record.record.film.name}</option>
                {movies.map(value => {
                    return <option value={value.name} key={value.name}>{value.name}</option>
                })}
            </select>
            <label>Sala</label>
            <select id="editShowHall">
                <option selected disabled hidden defaultValue={record.record.hall.number}> {record.record.hall.number}</option>
                {halls.map(value => {
                    return <option value={value.number} key={value.number}>{value.number}</option>
                })}
            </select>
            <label>Data</label>
            <input type="date" defaultValue={record.record.date} min={getCurrentDate()} id="editShowDate"></input>
            <label>Godzina</label>
            <input type="time" defaultValue={record.record.time} id="editShowTime"></input>
            <Button color="danger" type="submit">Edit</Button>
                </form>
        </div>
            
    );
}

export default EditShow;