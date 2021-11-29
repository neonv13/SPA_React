import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import Select from "react-select"

const AddShowForm = () => {

    const dispath = useDispatch();
    const [film,setFilm] = useState("")
    const [hall,setHall] = useState(0)
    const movies = useSelector(state => state.filmReducer);
    const halls = useSelector(state => state.hallReducer);
    const movieNames = movies.map((value) => {
        console.log(value.name)
    })

    return(
        <div>
        <label>Nazwa filmu</label>
        <select value = {film} onChange={e => setFilm(e.target.value)}>
            {movies.map(value => {
                return <option value={value.name}>{value.name}</option>
            })}
        </select>
        <label>Sala</label>
        <select value = {film} onChange={e => setFilm(e.target.value)}>
            {halls.map(value => {
                return <option value={value.number}>{value.number}</option>
            })}
        </select>
        <button onClick={() => dispath(action.showAdded(film, hall))}>Add</button>
        </div>
    )
    
}
export default AddShowForm;