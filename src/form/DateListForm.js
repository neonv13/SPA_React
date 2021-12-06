import React, { useState } from "react";
import * as action from "../actions/actions.js";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select"
import { Button } from 'react-bootstrap';

const DateListForm = () => {
        
    function getCurrentDate() {
        var myDate = new Date();
        var year = myDate.getFullYear();

        var month = myDate.getMonth() + 1;
        if (month <= 9)
            month = '0' + month;

        var day = myDate.getDate() + 1;
        if (day <= 9)
            day = '0' + day;

        return year + '-' + month + '-' + day;
    }
    return(
        <div>
        <label>Data</label>
        <input type="date" min={getCurrentDate()} id="showDate"></input>
        </div>
    )
    
}
export default DateListForm;