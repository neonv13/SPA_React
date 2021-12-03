// import * as actions from path

import { act } from "react-dom/test-utils";
import uuid from "react-uuid"


export default function filmReducer(state = [], action){
    let new_state;
    switch(action.type){
        case "filmAdded":
            return[
                ...state,
                {
                    id:action.new_film.id,
                    name:action.new_film.name,
                    duration:action.new_film.duration

                }
            ];            
        case "filmRemoved":
            return state.filter(film => film.id !== action.id);

        case "filmModified":
            let tmp = state.findIndex(film => film.id === action.payload.id);
            state[tmp].name = action.payload.name;
            state[tmp].duration = action.payload.duration;
            return state;
        case "filmGetsAll":
            new_state=Object.assign({}, state);
            new_state=action.data;
            return new_state; // More like fetch data from server
        default:
            return state;
    }
}