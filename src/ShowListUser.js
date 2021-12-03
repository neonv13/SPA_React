import React, { useState } from "react";
import * as action from "./actions/actions.js";
import {useSelector, useDispatch} from "react-redux";
import {Table, Button} from 'react-bootstrap'
import AddShowForm from "./AddShowForm.js";

const ShowListUser = () => {
    const dispath = useDispatch();
    const data = useSelector(state => state.showReducer);
}