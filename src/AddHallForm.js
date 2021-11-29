import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";

const AddHallForm = () => {

    const dispath = useDispatch();
    const [number,setNumber] = useState("")
    const [capacity,setCapacity] = useState(0)


    return(
        <div>
        <label>Numer sali</label>
        <input type="text" value = {number} onChange={e => setNumber(e.target.value)} ></input>
        <label>Pojemność</label>
        <input type="text" value = {capacity} onChange={e => setCapacity(e.target.value)}></input>
        <button onClick={() => dispath(action.hallAdded(number, capacity))}>Add</button>
        {console.log(number)}
        </div>
    )
    
}
export default AddHallForm;