import * as actions from "./actions.js"

export const filmAdd = (nrTmp, capacityTmp) =>({
    type: actions.FILM_ADDED,
    payload:{
        nr: nrTmp,
        capacity: capacityTmp
    }
});

export const filmRemove = (idTmp) =>({
    type: actions.FILM_REMOVED,
    payload:{
        id: idTmp
    }
});
