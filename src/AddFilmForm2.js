import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";

const AddFilmForm2 = () => {

    const dispath = useDispatch();
    const [name,setName] = useState("")
    const [duration,setDuration] = useState(0)


    return(
        <div>
        <label>Nazwa filmu</label>
        <input type="text" value = {name} onChange={e => setName(e.target.value)} ></input>
        <label>Czas trwania</label>
        <input type="text" value = {duration} onChange={e => setDuration(e.target.value)}></input>
        <button onClick={() => dispath(action.filmAdd(name, duration))}>Add</button>
        {console.log(name)}
        </div>
    )
    
}
export default AddFilmForm2;