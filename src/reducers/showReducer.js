export default function showReducer(state = [], action){
    let new_state
    switch(action.type){
        case "showAdded":
            return[
                ...state,
                {
                    id: action.new_show.id,
                    film: action.new_show.film,
                    hall: action.new_show.hall,
                    date: action.new_show.date,
                    time: action.new_show.time,
                    tickets_sold: action.new_show.tickets_sold,
                    booked_seats: action.new_show.booked_seats

                }
            ];
            
        case "showRemoved":
            return state.filter(show => show.id !== action.id);

        case "showModified":
            let tmp = state.findIndex(show => show.id === action.id);
            let element = {id:action.id,film:action.film,hall:action.hall, date:action.date, time:action.time, booked_seats:action.booked_seats}
            state[tmp] = element;
            return state;
        case "showGetsAll":
            new_state=Object.assign({}, state);
            new_state=action.data;
            return new_state; // More like fetch data from server
        default:
            return state;
    }
}