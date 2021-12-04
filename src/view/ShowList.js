import React, { useState, useEffect } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddShowForm from "../form/AddShowForm.js";
import EditShow from "../EditShow"


const ShowList = () => {

    const dispath = useDispatch();
    const data = useSelector(state => state.showReducer);
    useEffect(() => {
        dispath(action.showAllHalls());
        dispath(action.showAllFilms());
        dispath(action.showAllshows());
        dispath(action.showModified(2,"llldsdssdsddsl","kkkkdskk"))
    },[])
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.film}</td>
            <td>{value.hall}</td>
            <td><Button variant="danger" size="sm" onClick={() => dispath(action.deleteShow(value.id))}>Usuń seans</Button>
            <Button size = "sm" >Edytuj seans</Button></td>
            </tr>
            
        )
    })
    return(
        <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id seansu</th>
                <th>Nazwa filmu</th>
                <th>Sala</th>
                <th>Zarządzanie</th>
            </tr>
        </thead>
       <tbody>
           {list}
       </tbody>
       </Table>
       <AddShowForm/>
       </div>
    )
}
export default ShowList;