import * as actions from "./actionsTypes"

let lastID_film = 0;
let lastID_hall = 0;
let lastID_show = 0;

//Films
export const filmAdd = (name, duration) =>({
    type: actions.FILM_ADDED,
    payload:{
        id: ++lastID_film,
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

export const filmModified = (id, name, duration) =>({
    type: actions.FILM_MODIFIED,
    payload:{
        id: id,
        name: name,
        duration: duration
    }
});
export const filmGet = (idTmp) =>({
    type: actions.FILM_GET_ALL, 
});

//Halls
export const hallAdded = (number,capacity) =>({
    type: actions.HALL_ADDED,
    payload:{
        id: ++lastID_hall,
        number:number,
        capacity:capacity
    }
    
});
export const hallRemove = (idTmp) =>({
    type: actions.HALL_REMOVED,
    payload:{
        id: idTmp
        
    }
});
export const hallModified = (id,number,capacity) =>({
    type: actions.HALL_MODIFIED,
    payload:{
        id: id,
        number:number,
        capacity:capacity
    }
});

//Shows

export const showAdded = (film,hall) =>({
    type: actions.SHOW_ADDED,
    payload:{
        id: ++lastID_show,
        film: film,
        hall: hall
    }
});
export const showRemove = (idTmp) =>({
    type: actions.SHOW_REMOVED,
    payload:{
        id: idTmp
        
    }
});
export const showModified = (id, film, hall) =>({
    type: actions.SHOW_MODIFIED,
    payload:{
        id: id,
        film: film,
        hall: hall
    }
});