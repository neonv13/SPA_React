import React, { useState } from "react";
import {useSelector} from "react-redux";
// import axios from 'axios'
// import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";

const AddFilmForm2 = (prop) => {

    // const [nameLength,setName] = useState(0)
    // const [duration,setDuration] = useState()
    
    function addFilm(name,duration,img_src){
        const nameToUpperCase = name.toString().charAt(0).toUpperCase() + name.slice(1);
        prop.addMovieHandler(nameToUpperCase,duration,img_src);
        document.getElementById("filmDuration").value = ''
        document.getElementById("filmName").value = ''
    }
    addFilm.propTypes = {
        name: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
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
        <form onSubmit={() => addFilm(document.getElementById("filmName").value,document.getElementById("filmDuration").value,document.getElementById("filmImage").value)}>
        <label>Nazwa filmu</label>
        <input type="text" id="filmName" onChange ={validateName}></input>
        <label>Czas trwania</label>
        <input type="number" id="filmDuration" min="15" max="200"></input>
        <label>Okładka filmu</label>
        <input type="text" id="filmImage"></input>
        <button type="submit">Add</button>
        </form>
        </div>
    )
    
}
export default AddFilmForm2;