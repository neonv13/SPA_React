import React, { useState, useEffect } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddHallForm from './AddHallForm'


const HallList = () => {

    const dispath = useDispatch();
    const data = useSelector(state => state.hallReducer);
    useEffect(() => {
        dispath(action.showAllHalls());
    },[])
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.number}</td>
            <td>{value.capacity}</td>
            <td><Button variant="danger" size="sm" text ="Usun film"onClick={() => dispath(action.deleteHall(value.id))}>Usuń sale</Button></td>
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
       <AddHallForm/>
       </div>
    )
}
export default HallList;