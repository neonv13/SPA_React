// import * as actions from "/actions.actionType.js"


export default function hallReducer(state = [], action){
    switch(action.type){
        case "hallAdded":
            return[
                ...state,
                {
                    id: action.payload.id,
                    number: action.payload.number ,
                    capacity: action.payload.capacity
                }
            ];
            
        case "hallRemoved":
            return state.filter(hall => hall.id !== action.payload.id);

        case "hallModified":
            let tmp = state.findIndex(hall => hall.id === action.payload.id);
            state[tmp].number = action.payload.number;
            state[tmp].capacity = action.payload.capacity;
            return state;
        case "hallGetsAll":
            return state; // More like fetch data from server
        default:
            return state;
    }
}