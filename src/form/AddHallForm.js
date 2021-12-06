import React, { useState } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";

const AddHallForm = () => {

    const dispath = useDispatch();
    const [number,setNumber] = useState("")
    const [capacity,setCapacity] = useState(0)
    const data = useSelector(state => state.hallReducer);

    return(
        <div>
        <form onSubmit={() => dispath(action.addHall(number, capacity))}>
        <label>Numer sali</label>
        <input type="number" value = {number} onChange={e => setNumber(e.target.value)} ></input>
        <label>Pojemność</label>
        <input type="number" value = {capacity} onChange={e => setCapacity(e.target.value)}></input>
        <button>Add</button>
        </form>
        </div>
    )
    
}
export default AddHallForm;