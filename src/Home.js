import {useSelector, useDispatch} from "react-redux";
import * as action from "./actions/actions.js"

function Home(){
    let tmp = __dirname;
    let x =0;
    let y =0;
    // const some = useSelector(state => state.filmReducer)
    const dispath = useDispatch();
    return(
        <div className="tmp">
            <h1>Home Page Here</h1>
            <button onClick={() => dispath(action.filmAdd("avg", 200))}>Add</button>
            <button onClick={() => dispath(action.filmRemove(++y))}>Remove {x++}</button>

            <button onClick={() => dispath(action.filmModified(++x,"Star", 500))}>Mod</button>
            {console.log(tmp)}
            
        </div>
        
    );
}

export default Home;