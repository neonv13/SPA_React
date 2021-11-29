export default function showReducer(state = [], action){
    switch(action.type){
        case "showAdded":
            return[
                ...state,
                {
                    id: action.payload.id,
                    film: action.payload.film ,
                    hall: action.payload.hall
                }
            ];
            
        case "showRemoved":
            return state.filter(show => show.id !== action.payload.id);

        case "showModified":
            let tmp = state.findIndex(show => show.id === action.payload.id);
            state[tmp].film = action.payload.film;
            state[tmp].hall = action.payload.hall;
            return state;
        case "showGetsAll":
            return state; // More like fetch data from server
        default:
            return state;
    }
}