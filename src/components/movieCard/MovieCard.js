import React from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap'
import  '../data/data'
import { Rate } from 'antd';
import '../style/movieCard.css'

const MovieCard = (props) => {
    
    return (
        <div className="carte">
            <Card>
                <Card.Img variant="top" src={props.posterUrl} className="image"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href={props.trailer}>Watch it</Card.Link>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <Rate disabled defaultValue={props.rate} /></ListGroupItem>   
                </ListGroup>
            </Card>
        </div>
    )
}

export default MovieCard
