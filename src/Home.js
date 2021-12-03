import {useSelector, useDispatch} from "react-redux";
import * as action from "./actions/actions.js";



function Home(){
    let tmp = __dirname;
    let x =0;
    let y =0;
    const dispath = useDispatch();
    const data = useSelector(state => state.filmReducer)
    
    return(
        <div>
        <h1>Home Page Here</h1>
            
            <button onClick={() => dispath(action.filmRemove(++y))}>Remove {x++}</button>
            <button onClick={() => dispath(action.filmModified(++x,"Star", 500))}>Mod</button>
        </div>
    );
}

export default Home;