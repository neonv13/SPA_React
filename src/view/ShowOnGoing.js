import { useSelector, useDispatch } from "react-redux";
import * as action from "../actions/actions.js";
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useEffect } from "react"
import { Link } from "react-router-dom";

const ShowOnGoing = () => { 
    const dispath = useDispatch();
    const movieList = useSelector(state => state.filmReducer)
    const showListTmp = useSelector(state => state.showReducer)
    
    useEffect(() => {
        dispath(action.showAllFilms());
        dispath(action.showAllshows());
    }, [])

    function getCurrentDate() {
        var myDate = new Date();
        var year = myDate.getFullYear();

        var month = myDate.getMonth() + 1;
        if (month <= 9)
            month = '0' + month;

        var day = myDate.getDate();
        if (day <= 9)
            day = '0' + day;

        return year + '-' + month + '-' + day;
    }
    function getCurrentTime(){
        var myDate = new Date();
        var hour = myDate.getHours();
        var minutes = myDate.getMinutes();
        return hour + ":" + minutes;
    }
    function changeTime(time,duration){
        var date = new Date();
        let arr = time.split(':');
        let hour = parseInt(arr[0]);
        let min = parseInt(arr[1]);
        let x = min + duration
        date.setHours(hour);
        date.setMinutes(min);
        date.setMinutes(duration);
        
        return date.getHours() + ":" + date.getMinutes();
    }
       
    const showList = showListTmp.filter(value => value.date === getCurrentDate() && value.time < getCurrentTime() && changeTime(value.time,value.film.duration) > getCurrentTime());


    const cards = showList.map(value => {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={value.film.img_src} />
                    <Card.Body>
                        <Card.Title>{value.film.name}</Card.Title>
                        {(value.date === getCurrentDate() && value.time < getCurrentTime() && changeTime(value.time,value.film.duration) > getCurrentTime()) &&
                            <Card.Text style={{background:"red"}}>
                                Trwa
                            </Card.Text>
                        }
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
                        {(value.time > getCurrentTime() || changeTime(value.time,value.film.duration) > getCurrentTime()) &&
                            <div className="card-footer-element">
                                <Link to={`buy_ticket/${value.id}`} params={value.id}><Button size="sm">Kup bilet</Button></Link>
                            </div>
                        }

                    </div>
                </Card>





            </div>

        )
    })

    return (
        <div>
            <h1 className="cards-title">Dzisiejsze seanse</h1>
            <Row xs={1} md={3} className="g-4">
                {cards}
            </Row>
        </div>

    )


}
export default ShowOnGoing;