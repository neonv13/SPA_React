import * as actions from "./actionsTypes"
import axios from 'axios'

let lastID_film = 0;
let lastID_hall = 0;
let lastID_show = 0;

export const filmRemove = (idTmp) =>({
    type: actions.FILM_REMOVED,
    payload:{
        id: idTmp       
    }
});

export const deleteFilm = (id) => {
    return async dispatch => {
        const deletedFilm = await axios.delete(`http://localhost:8000/films/${id}`);
        console.log(deletedFilm);
        
        dispatch({ type: actions.FILM_REMOVED, id });
      
      
  }
};
export const filmModified = (id, name, duration, img_src) =>({
    type: actions.FILM_MODIFIED,
    payload:{
        id: id,
        name: name,
        duration: duration,
        img_src: img_src
    }
});
export const filmGet = (data) =>({
    type: actions.FILM_GET_ALL,
    data:data
});

const getFilm=()=>{ 
    return axios("http://localhost:8000/films") 
    .then(res=>{
        const data = res.data;
        lastID_film = data.length;
        return data
    }
        ).catch(error => console.error("Error:", error));
    

}; 
export const showAllFilms = () => (dispatch) => { 
    getFilm().then(data => { 
        dispatch(filmGet(data)); 
    }).catch(error => { 
        throw (error); 
    }); 
};
const addDataFilm=(new_film)=>{ 
    return axios({url:"http://localhost:8000/films", 
    method: "POST", 
    headers: { 
        "Content-Type": "application/json"}, 
        data: JSON.stringify(new_film) 
    }).then(res=>res.data).catch(error => console.error("Error:", error)); 

}; 
export const addFilmAction = (new_film) => ( 
    { 
        type: actions.FILM_ADDED, 
        new_film 
    } 
); 
export const addFilm = (id,name,duration,img_src) => (dispatch) => { 
    const film_2send = { id:id, name:name, duration:duration, img_src: img_src }; 
    addDataFilm(film_2send).then(data => { 
         dispatch(addFilmAction(film_2send)); 
    }).catch(error => { 
        throw (error); 
    }); 
}; 




//Hall

const addDataHall=(new_hall)=>{ 
    return axios({url:"http://localhost:8000/halls", 
    method: "POST", 
    headers: { 
        "Content-Type": "application/json"}, 
        data: JSON.stringify(new_hall) 
    }).then(res=>res.data).catch(error => console.error("Error:", error)); 

}; 
export const addHallAction = (new_hall) => ( 
    { 
        type: actions.HALL_ADDED, 
        new_hall 
    } 
); 
export const addHall = (id,number,capacity) => (dispatch) => { 
    const hall_2send = { id:id, number:number, capacity:capacity }; 
    addDataHall(hall_2send).then(data => { 
         dispatch(addHallAction(hall_2send)); 
    }).catch(error => { 
        throw (error); 
    }); 
}; 

export const deleteHall = (id) => {
    return async dispatch => {
        const deletedHall = await axios.delete(`http://localhost:8000/halls/${id}`);
        dispatch({ type: actions.HALL_REMOVED, id });
      
      
  }
};
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

export const hallGet = (data) =>({
    type: actions.HALL_GET_ALL,
    data:data
});

const getHall=()=>{ 
    return axios("http://localhost:8000/halls") 
    .then(res=>res.data).catch(error => console.error("Error:", error)); 

}; 
export const showAllHalls = () => (dispatch) => { 
    getHall().then(data => { 
        dispatch(hallGet(data)); 
    }).catch(error => { 
        throw (error); 
    }); 
}; 

//Shows

const addDataShow=(new_show)=>{ 
    return axios({url:"http://localhost:8000/shows", 
    method: "POST", 
    headers: { 
        "Content-Type": "application/json"}, 
        data: JSON.stringify(new_show) 
    }).then(res=>res.data).catch(error => console.error("Error:", error)); 

}; 
export const addShowAction = (new_show) => ( 
    { 
        type: actions.SHOW_ADDED, 
        new_show 
    } 
); 
export const addShow = (id,film,hall,date,time,tickets_sold,booked_seats) => (dispatch) => { 
    const show_2send = { id:id, film: film, hall:hall, date:date, time:time, tickets_sold:tickets_sold,booked_seats:booked_seats }; 
    addDataShow(show_2send).then(data => { 
         dispatch(addShowAction(show_2send)); 
    }).catch(error => { 
        throw (error); 
    }); 
}; 





// export const showAdded = (film,hall) =>({
//     type: actions.SHOW_ADDED,
//     payload:{
//         id: ++lastID_show,
//         film: film,
//         hall: hall
//     }
// });

export const deleteShow = (id) => {
    return async dispatch => {
        const deletedShow = await axios.delete(`http://localhost:8000/shows/${id}`);
        dispatch({ type: actions.SHOW_REMOVED, id });
      
      
  }
};
export const showRemove = (idTmp) =>({
    type: actions.SHOW_REMOVED,
    payload:{
        id: idTmp
        
    }
});
export const showModified = (id, film, hall) =>{
    return async dispatch => {
        const editShow = await axios.put(`http://localhost:8000/shows/${id}`,{
            film:film,
            hall:hall
        })
        dispatch({type: actions.SHOW_MODIFIED, film, hall})
    }
    
};
export const showGet = (data) =>({
    type: actions.SHOW_GET_ALL,
    data:data
});

const getShow=()=>{ 
    return axios("http://localhost:8000/shows") 
    .then(res=>res.data).catch(error => console.error("Error:", error)); 

}; 
export const showAllshows = () => (dispatch) => { 
    getShow().then(data => { 
        dispatch(showGet(data)); 
    }).catch(error => { 
        throw (error); 
    }); 
}; 