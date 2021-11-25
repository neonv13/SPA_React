import * as actions from "./actions.js"

let lastID = 0;

export default function filmReducer(state = [], action){
    switch(action.type){
        case actions.FILM_ADDED:
            return[
                ...state,
                {
                    id: ++lastID,
                    nr: action.payload.nr,
                    capacity: action.payload.capacity 
                }
            ];
            
        case actions.FILM_REMOVED:
            return state.filter(film => film.id !== action.payload.id);

        case actions.FILM_MODIFIED:
        case actions.FILM_GET_ALL:
        default:
            return state;
    }

}