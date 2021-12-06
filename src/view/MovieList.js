import React, { useEffect, useState } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddFilmForm2 from "../form/AddFilmForm2.js";


const MovieList = (prop) => {

    const dispath = useDispatch();
    
     useEffect(() => {
        prop.getAllMovieHandler()  
        
     },[])
     const data = useSelector(state => state.filmReducer);
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.duration}</td>
            <td><a href = {value.img_src}>Okładka</a></td>
            {console.log(value.id)}
            <td><Button variant="danger" size="sm" text ="Usun film"onClick={() => prop.deleteMovieHandler(value.id,value.name)}>Usuń film</Button></td>
            </tr>
            
        )
    })
    return(
        <div className="show-list">
        <div className="show-list-element">
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nazwa filmu</th>
                <th>Czas trwania</th>
                <th>Zdjęcie</th>
            </tr>
        </thead>
       <tbody>
           {list}
       </tbody>
       </Table>
       </div>
       <div className="show-list-element">
       <AddFilmForm2 addMovieHandler = {prop.addMovieHandler}/>
       </div>
       </div>
    )
}
export default MovieList;