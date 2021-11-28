// import * as actions from path


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
        case "filmGetsAll":
            return state;
        default:
            return state;
    }
}