import { useSelector, useDispatch } from "react-redux";
import * as action from "../actions/actions.js";
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useEffect } from "react"
import MovieListByDate from "./MovieListByDate.js";





function Home() {
    const dispath = useDispatch();
    useEffect(() => {
        dispath(action.showAllFilms());
        dispath(action.showAllshows());
    }, [])
    return (
        <div className="home-page">
            <div className="cards">
                <MovieListByDate />
            </div>
        </div>
    );
}

export default Home;