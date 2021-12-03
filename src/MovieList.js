import React, { useEffect, useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddFilmForm2 from "./AddFilmForm2.js";


const MovieList = () => {

    const dispath = useDispatch();
    const data = useSelector(state => state.filmReducer);
     useEffect(() => {
         dispath(action.showAllFilms());
        
     },[])
     console.log(data) 
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.duration}</td>
            <td><Button variant="danger" size="sm" text ="Usun film"onClick={() => dispath(action.deleteFilm(value.id))}>Usuń film</Button></td>
            </tr>
            
        )
    })
    return(
        <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id filmu</th>
                <th>Nazwa filmu</th>
                <th>Czas trwania</th>
            </tr>
        </thead>
       <tbody>
           {list}
       </tbody>
       </Table>
       <AddFilmForm2/>
       </div>
    )
}
export default MovieList;