import React, { useState } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios'
const AddFilmForm2 = () => {

    const dispath = useDispatch();
    const [nameLength,setName] = useState(0)
    const [duration,setDuration] = useState()
    function addFilm(id,name,duration,img_src){
        const nameToUpperCase = name.toString().charAt(0).toUpperCase() + name.slice(1);
        dispath(action.addFilm(id,nameToUpperCase,duration,img_src))
        document.getElementById("filmDuration").value = ''
        document.getElementById("filmName").value = ''
    }
    function validateName(e){
        const input = document.getElementById("filmName");
        input.style.borderColor = "red"
        if(e.target.value.length < 3){
            input.style.borderColor = "red";
        }
    }
    const data = useSelector(state => state.filmReducer);
    return(
        <div>
        <label>Nazwa filmu</label>
        <input type="text" id="filmName" onChange ={validateName}></input>
        <label>Czas trwania</label>
        <input type="number" id="filmDuration"></input>
        <label>Okładka filmu</label>
        <input type="text" id="filmImage"></input>
        <button onClick={() => addFilm(data.length + 1,document.getElementById("filmName").value,document.getElementById("filmDuration").value,document.getElementById("filmImage").value)}>Add</button>
        </div>
    )
    
}
export default AddFilmForm2;