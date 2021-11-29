import filmReducer from "./filmReducer";
import hallReducer from "./hallReducer"
import showReducer from "./showReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filmReducer: filmReducer,
    hallReducer: hallReducer,
    showReducer: showReducer
})

export default rootReducer;