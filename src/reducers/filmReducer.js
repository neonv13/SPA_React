// import * as actions from path

let lastID = 0;

export default function filmReducer(state = [], action){
    switch(action.type){
        case "filmAdded":
            return[
                ...state,
                {
                    id: ++lastID,
                    nr: action.payload.nr,
                    capacity: action.payload.capacity 
                }
            ];
            
        case "filmRemoved":
            return state.filter(film => film.id !== action.payload.id);

        case "filmModified":
        case "filmGetsAll":
        default:
            return state;
    }
}