import React, { useEffect, useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddFilmForm2 from "./AddFilmForm2.js";


const MovieList = (prop) => {

    // const dispath = useDispatch();
    const data = useSelector(state => state.filmReducer);
     useEffect(() => {
         prop.getAllMovieHandler()        
     },[])
     console.log(data) 
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.duration}</td>
            <td><Button variant="danger" size="sm" text ="Usun film"onClick={() => prop.deleteMovieHandler(value.id)}>Usuń film</Button></td>
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
       <AddFilmForm2 addMovieHandler = {prop.addMovieHandler}/>
       </div>
    )
}
export default MovieList;