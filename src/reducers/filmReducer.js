// import * as actions from path

import { act } from "react-dom/test-utils";


export default function filmReducer(state = [], action){
    switch(action.type){
        case "filmAdded":
            return[
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name ,
                    duration: action.payload.duration
                }
            ];
            
        case "filmRemoved":
            return state.filter(film => film.id !== action.payload.id);

        case "filmModified":
            let tmp = state.findIndex(film => film.id === action.payload.id);
            state[tmp].name = action.payload.name;
            state[tmp].duration = action.payload.duration;
            return state;
        case "filmGetsAll":
            return state; // More like fetch data from server
        default:
            return state;
    }
}