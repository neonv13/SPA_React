import * as actions from "./actions.js"

//Films
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

export const filmModified = (idTmp) =>({
    
});

//Halls
export const hallAdded = (idTmp) =>({
    
});
export const hallRemove = (idTmp) =>({
    
});
export const hallModified = (idTmp) =>({
    
});

//Shows

export const showAdded = (idTmp) =>({
    
});
export const showRemove = (idTmp) =>({
    
});
export const showModified = (idTmp) =>({
    
});