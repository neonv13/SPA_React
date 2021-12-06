// import * as actions from "/actions.actionType.js"


export default function hallReducer(state = [], action){
    let new_state;
    switch(action.type){
        case "hallAdded":
            return[
                ...state,
                {
                    id: action.new_hall.id,
                    number: action.new_hall.number ,
                    capacity: action.new_hall.capacity
                }
            ];
            
        case "hallRemoved":
            return state.filter(hall => hall.id !== action.id);

        case "hallModified":
            let tmp = state.findIndex(hall => hall.id === action.payload.id);
            state[tmp].number = action.payload.number;
            state[tmp].capacity = action.payload.capacity;
            return state;
        case "hallGetsAll":
            new_state=Object.assign({}, state);
            new_state=action.data;
            return new_state; // More like fetch data from server
        default:
            return state;
    }
}