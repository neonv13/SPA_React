import {useSelector, useDispatch} from "react-redux";
import * as action from "./actions/actions.js";
import {Card} from 'react-bootstrap'



function Home(){
    let tmp = __dirname;
    let x =0;
    let y =0;
    const dispath = useDispatch();
    const data = useSelector(state => state.filmReducer)
    
    return(
       
    );
}

export default Home;