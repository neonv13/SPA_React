import * as actions from "./actionsTypes"

let lastID = 0;

//Films
export const filmAdd = (name, duration) =>({
    type: actions.FILM_ADDED,
    payload:{
        id: ++lastID,
        name: name,
        duration: duration
    }
});

export const filmRemove = (idTmp) =>({
    type: actions.FILM_REMOVED,
    payload:{
        id: idTmp
    }
});

export const filmModified = (name, duration) =>({
    type: actions.FILM_MODIFIED,
    payload:{
        name: name,
        duration: duration
    }
});
export const filmGet = (idTmp) =>({
    type: actions.FILM_GET_ALL, 
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