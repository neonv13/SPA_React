import { useSelector, useDispatch } from "react-redux";
import * as action from "../actions/actions.js";
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useEffect } from "react"
import { Link } from "react-router-dom";

const MovieListByDate = (dateMovie) => {
    const dispath = useDispatch();
    const movieList = useSelector(state => state.filmReducer)
    const showList = useSelector(state => state.showReducer)
    useEffect(() => {
        dispath(action.showAllFilms());
        dispath(action.showAllshows());
    }, [])
    const cards = showList.map(value => {
        return (
            <div>
                
                
                
                <Card>
                    <Card.Img variant="top" src={value.film.img_src} />
                    <Card.Body>
                        <Card.Title>{value.film.name}</Card.Title>
                        <Card.Text>
                            Czas trwania : {value.film.duration}
                        </Card.Text>
                        <Card.Text>
                            Sala: {value.hall.number}<br></br>
                            Ilość miejsc: {value.hall.capacity - value.tickets_sold}
                        </Card.Text>
                    </Card.Body>
                    <div className="card-footer">
                    
                        <div className="card-footer-element">
                        Data: {value.date}<br></br>
                        Godzina: {value.time}
                        </div>
                        <div className="card-footer-element">
                        <Link to={`buy_ticket/${value.id}`} params={value.id}><Button size="sm">Kup bilet</Button></Link>
                        </div>
                    
                    </div>
                </Card>
                
            
                
                
            
        </div>
        
        )
    })

        return(
            <div>
                <h1 className="cards-title">Dostępne seanse</h1>
                <Row xs={1} md={3} className="g-4">
                    {cards}
                    </Row>
                    </div>
                
        )


}
export default MovieListByDate;