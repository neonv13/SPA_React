// import * as actions from "./actionsTypes";
// import api from "../api/axios";
// import axios from 'axios';

// let lastID_film = 0;
// let lastID_hall = 0;
// let lastID_show = 0;



// //          Movie 

// /// Delete
// const movieDeleteStorage = (movie) =>({
//     type: actions.FILM_REMOVED,
//     payload:{
//         id: movie.id       
//     }
// });

// export const movieDelete = (movie) => {
//     return async dispatch => {
//         const deletedMovie = await api.delete(`/films/${movie.id}`);
//         if(deletedMovie.statusText === "OK"){
//             dispatch(movieDeleteStorage(movie));
//         }    
//   }
// };

// //Modify
// const movieModStorage = (movie) =>({
//     type: actions.FILM_MODIFIED,
//     payload:{
//         id: movie.id,
//         name: movie.name,
//         duration: movie.duration
//     }
// });
// export const movieMod = (movie) => {
//     return async dispatch => {
//         const responseMovieMod = await api.put(`/films/${movie.id}`, movie);
//         if(responseMovieMod.statusText === "OK"){
//             dispatch(movieModStorage(movie));
//         }    
//   }
// };

// //getAll - save movies date in storage
// const movieSaveStorage = (date) =>({
//     type: actions.FILM_GET_ALL,
//     payload:{
//         date: date
//     }
// });
// const movieGetAll = () => {
//     return async dispatch => {
//         const respondGetAll = await axios.get("/films/");
//         if(respondGetAll.statusText === "OK"){

//             // mape data to fing max id?!?!?
//             dispatch(movieSaveStorage(respondGetAll.data));
//         }    
//   }
// };

// //Add
// export const addFilmAction = (movie) => ( 
//     { 
//         type: actions.FILM_ADDED, 
//         movie /// reducer need change
//         // payload:{
//         //     movie
//         // }

//     } 
// ); 
// export const addMovie = (movie) => { 
//     return async dispatch => {
//         const request = {
//             id: ++lastID_film, /// ID count?!? but waht about checking it first?
//             ...movie
//         }
//         const responseAddMovie = await axios.post("films/", request);
//         if(responseAddMovie ==="OK"){
//             dispatch(addFilmAction(movie))
//         }
//     }
// }; 

// //          Hall

// const addDataHall=(new_hall)=>{ 
//     return axios({url:"http://localhost:8000/halls", 
//     method: "POST", 
//     headers: { 
//         "Content-Type": "application/json"}, 
//         data: JSON.stringify(new_hall) 
//     }).then(res=>res.data).catch(error => console.error("Error:", error)); 

// }; 
// export const addHallAction = (new_hall) => ( 
//     { 
//         type: actions.HALL_ADDED, 
//         new_hall 
//     } 
// ); 
// export const addHall = (id,number,capacity) => (dispatch) => { 
//     const hall_2send = { id:id, number:number, capacity:capacity }; 
//     addDataHall(hall_2send).then(data => { 
//          dispatch(addHallAction(hall_2send)); 
//     }).catch(error => { 
//         throw (error); 
//     }); 
// }; 

// export const deleteHall = (id) => {
//     return async dispatch => {
//         const deletedHall = await axios.delete(`http://localhost:8000/halls/${id}`);
//         dispatch({ type: actions.HALL_REMOVED, id });
      
      
//   }
// };
// export const hallRemove = (idTmp) =>({
//     type: actions.HALL_REMOVED,
//     payload:{
//         id: idTmp
        
//     }
// });
// export const hallModified = (id,number,capacity) =>({
//     type: actions.HALL_MODIFIED,
//     payload:{
//         id: id,
//         number:number,
//         capacity:capacity
//     }
// });

// export const hallGet = (data) =>({
//     type: actions.HALL_GET_ALL,
//     data:data
// });

// const getHall=()=>{ 
//     return axios("http://localhost:8000/halls") 
//     .then(res=>res.data).catch(error => console.error("Error:", error)); 

// }; 
// export const showAllHalls = () => (dispatch) => { 
//     getHall().then(data => { 
//         dispatch(hallGet(data)); 
//     }).catch(error => { 
//         throw (error); 
//     }); 
// }; 

// //Shows

// const addDataShow=(new_show)=>{ 
//     return axios({url:"http://localhost:8000/shows", 
//     method: "POST", 
//     headers: { 
//         "Content-Type": "application/json"}, 
//         data: JSON.stringify(new_show) 
//     }).then(res=>res.data).catch(error => console.error("Error:", error)); 

// }; 
// export const addShowAction = (new_show) => ( 
//     { 
//         type: actions.SHOW_ADDED, 
//         new_show 
//     } 
// ); 
// export const addShow = (id,film,hall) => (dispatch) => { 
//     const show_2send = { id:id, film:film, hall:hall }; 
//     addDataShow(show_2send).then(data => { 
//          dispatch(addShowAction(show_2send)); 
//     }).catch(error => { 
//         throw (error); 
//     }); 
// }; 





// // export const showAdded = (film,hall) =>({
// //     type: actions.SHOW_ADDED,
// //     payload:{
// //         id: ++lastID_show,
// //         film: film,
// //         hall: hall
// //     }
// // });

// export const deleteShow = (id) => {
//     return async dispatch => {
//         const deletedShow = await axios.delete(`http://localhost:8000/shows/${id}`);
//         dispatch({ type: actions.SHOW_REMOVED, id });
      
      
//   }
// };
// export const showRemove = (idTmp) =>({
//     type: actions.SHOW_REMOVED,
//     payload:{
//         id: idTmp
        
//     }
// });
// export const showModified = (id, film, hall) =>{
//     return async dispatch => {
//         const editShow = await axios.put(`http://localhost:8000/shows/${id}`,{
//             film:film,
//             hall:hall
//         })
//         dispatch({type: actions.SHOW_MODIFIED, film, hall})
//     }
    
// };
// export const showGet = (data) =>({
//     type: actions.SHOW_GET_ALL,
//     data:data
// });

// const getShow=()=>{ 
//     return axios("http://localhost:8000/shows") 
//     .then(res=>res.data).catch(error => console.error("Error:", error)); 

// }; 
// export const showAllshows = () => (dispatch) => { 
//     getShow().then(data => { 
//         dispatch(showGet(data)); 
//     }).catch(error => { 
//         throw (error); 
//     }); 
// }; 