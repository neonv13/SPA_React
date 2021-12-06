import * as actions from "../actions/actionsTypes.js"

import { act } from "react-dom/test-utils";
import uuid from "react-uuid"


export default function filmReducer(state = [], action){
    let new_state;
    switch(action.type){
        case actions.FILM_ADDED:
            return[
                ...state,
                {
                    id:action.new_film.id,
                    name:action.new_film.name,
                    duration:action.new_film.duration,
                    img_src:action.new_film.img_src

                }
            ];            
        case "filmRemoved":
            return state.filter(film => film.id !== action.id);

        case "filmModified":
            console.log(state)
            let tmp = state.findIndex(film => film.name === action.payload.name);
            state[tmp].name = action.payload.name;
            state[tmp].duration = action.payload.duration;
            state[tmp].img_src = action.payload.img_src
            console.log(state)
            return state;
        case "filmGetsAll":
            new_state=Object.assign({}, state);
            new_state=action.data;
            return new_state; // More like fetch data from server
        default:
            return state;
    }
}