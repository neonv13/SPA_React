import React, { useState } from "react";
import * as action from "../actions/actions.js";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select"
import { Button } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";

const AddShowForm = (prop) => {

    // const dispath = useDispatch();
    const movies = useSelector(state => state.filmReducer);
    const halls = useSelector(state => state.hallReducer);
    // const [film, setFilm] = useState()
    // const [hall, setHall] = useState()
    const data = useSelector(state => state.showReducer);
    function addFullData(filmName, hallName, date, time) {
        const film = movies.filter(value => value.name === filmName)
        console.log(film)
        const hall = halls.filter(value => value.number === hallName)
        const filmAsObject = { name: film[0].name, duration: film[0].duration, img_src: film[0].img_src }
        const hallAsObject = { number: hall[0].number, capacity: hall[0].capacity }
        let booked_seats = []
        for(let i = 0; i< hallAsObject.capacity;i++){
            booked_seats[i] = false;
        }
        console.log(filmAsObject, hallAsObject, date, time, booked_seats);
        prop.addShowHandler(filmAsObject, hallAsObject, date, time, booked_seats);
    }
    addFullData.propTypes = {
        filmName: PropTypes.string,
        hallName: PropTypes.number,

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
        
            <form name="showForm" onSubmit={() => addFullData(document.getElementById("showFilm").value, document.getElementById("showHall").value
                , document.getElementById("showDate").value, document.getElementById("showTime").value)}>
            <label>Nazwa filmu</label>
            <select id="showFilm">
                <option disabled hidden selected> -- wybierz film-- </option>
                {movies.map(value => {
                    return <option value={value.name} key={value.name}>{value.name}</option>
                })}
            </select>
            <label>Sala</label>
            <select id="showHall">
                <option disabled hidden selected> -- wybierz sale -- </option>
                {halls.map(value => {
                    return <option value={value.number} key={value.number}>{value.number}</option>
                })}
            </select>
            <label>Data</label>
            <input type="date" min={getCurrentDate() - 1} id="showDate"></input>
            <label>Godzina</label>
            <input type="time" id="showTime"></input>
            <Button color="danger" type="submit">Add</Button>
                </form>
        
    )

}
export default AddShowForm;