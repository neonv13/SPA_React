import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios'
const AddFilmForm2 = () => {

    const dispath = useDispatch();
    const [name,setName] = useState()
    const [duration,setDuration] = useState()
    function addFilm(id,name,duration){
        dispath(action.addFilm(id,name,duration))
        document.getElementById("filmDuration").value = ''
        document.getElementById("filmName").value = ''
    }
    function validateInputs(){
        const name = document.getElementById("filmName");
        const dur = document.getElementById("filmDuration");
        
    }
    const data = useSelector(state => state.filmReducer);
    return(
        <div>
        <label>Nazwa filmu</label>
        <input type="text" id="filmName"></input>
        <label>Czas trwania</label>
        <input type="text" id="filmDuration"></input>
        <button onClick={() => addFilm(data.length + 1,document.getElementById("filmName").value,document.getElementById("filmDuration").value)}>Add</button>
        </div>
    )
    
}
export default AddFilmForm2;