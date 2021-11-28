import {useSelector, useDispatch} from "react-redux";
import * as action from "./actions/actions.js"

function Home(){
    let tmp = __dirname;
    const some = useSelector(state => state.filmReducer)
    const dispath = useDispatch();
    return(
        <div className="tmp">
            <h1>Home Page Here</h1>
            <button onClick={() => dispath(action.filmAdd("avg", 200))}>Add</button>
            <button onClick={() => dispath(action.filmRemove(1))}>Add</button>
            {console.log(tmp)}
            
        </div>
        
    );
}

export default Home;