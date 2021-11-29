import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddShowForm from "./AddShowForm.js";


const ShowList = () => {

    const dispath = useDispatch();
    const data = useSelector(state => state.showReducer);
    const list = data.map((value) =>{
        return(
            <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.film}</td>
            <td>{value.hall}</td>
            <td><Button variant="danger" size="sm" onClick={() => dispath(action.showRemove(value.id))}>Usuń seans</Button></td>
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