import React, { useState, useEffect } from "react";
import * as action from "../actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddHallForm from '../form/AddHallForm'


const HallList = (prop) => {

    const dispath = useDispatch();
    const data = useSelector(state => state.hallReducer);
    useEffect(() => {
        prop.getAllHallHandler();
    },[])
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.number}</td>
            <td>{value.capacity}</td>
            <td><Button variant="danger" size="sm" text ="Usun film"onClick={() => prop.deleteHallHandler(value.id)}>Usuń sale</Button></td>
            </tr>
            
        )
    })
    return(
        <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id sali</th>
                <th>Numer sali</th>
                <th>Pojemność sali</th>
            </tr>
        </thead>
       <tbody>
           {list}
       </tbody>
       </Table>
       <AddHallForm addHallHandler = {prop.addHallHandler}/>
       </div>
    )
}
export default HallList;