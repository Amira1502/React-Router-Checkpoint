import React from "react";
import "./Description.css";
import {Card } from "react-bootstrap";
import vid from '../Assets/video/vid.mp4';

const Description = ({ location, history}) => {
  const movie = location.state.movie;
  return (
  
      <Card className="movieCard">
    <Card.Img variant="top" className="photo" src={movie.img} />
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
       {movie.descrip}
       <video src={vid} width="650" height="240" controls="controls" autoplay="true" />
      </Card.Text>
      


      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </Card.Body>
  </Card>
  
  

  )
}
export default Description