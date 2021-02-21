import React from 'react'
import { Link } from "react-router-dom";
import './MovieCard.css'
import {Card,Button} from 'react-bootstrap';


const MovieCard = ({ movie }) => {
  return (

    <Card className="card">
    <Card.Img variant="top" src={movie.img} />
    <Card.Body>
      <Card.Title className="movieTitle">{movie.title}</Card.Title>
      <Card.Text>
      {movie.descrip}
    </Card.Text>
   
    <Link
      to={{ pathname: `/description`, state: {movie: movie } }}
    >
      {" "}
      <Button variant="primary" className="MovieBtn">Lern more</Button>
    </Link>
    </Card.Body>
 
    </Card>
  )
}

export default MovieCard