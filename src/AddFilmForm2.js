import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios'
const AddFilmForm2 = () => {

    const dispath = useDispatch();
    const [name,setName] = useState()
    const [duration,setDuration] = useState()
    const data = useSelector(state => state.filmReducer);
    return(
        <div>
        <label>Nazwa filmu</label>
        <input type="text" value = {name} onChange={e => setName(e.target.value)} ></input>
        <label>Czas trwania</label>
        <input type="text" value = {duration} onChange={e => setDuration(e.target.value)}></input>
        <button onClick={() => dispath(action.addFilm(data.length + 1,name, duration))}>Add</button>
        </div>
    )
    
}
export default AddFilmForm2;