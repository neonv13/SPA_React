import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import Select from "react-select"
import {Button} from 'react-bootstrap';

const AddShowForm = () => {

    const dispath = useDispatch();
    const movies = useSelector(state => state.filmReducer);
    const halls = useSelector(state => state.hallReducer);
    const [film,setFilm] = useState()
    const [hall,setHall] = useState()
    const data = useSelector(state => state.showReducer);
    

    return(
        <div>
        <label>Nazwa filmu</label>
        <select defaultValue = {film} onChange={e => setFilm(e.target.value)}>
        <option disabled hidden selected> -- wybierz film-- </option>
            {movies.map(value => {
                return <option value={value.name} key={value.name}>{value.name}</option>
            })}
        </select>
        <label>Sala</label>
        <select defaultValue = {hall} onChange={e => setHall(e.target.value)}>
        <option disabled hidden selected> -- wybierz sale -- </option>
            {halls.map(value => {
                return <option value={value.number} key={value.number}>{value.number}</option>
            })}
        </select>
        <Button color="danger" onClick={() => dispath(action.addShow(data.length + 1,film, hall))}>Add</Button>
        </div>
    )
    
}
export default AddShowForm;