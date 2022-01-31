import React from 'react'
import  '../data/data'
import { Rate } from 'antd';
import '../style/movieCard.scss'


const Movie = (props) => {
    
    return (
        <div className='items' >
            <div className="carte">
                <img variant="top" src={props.posterUrl} className="image"/>
                <span>{props.title}</span>
                <span className='description'>{props.description}</span>
                <Rate disabled defaultValue={props.rate} />  
                <hr/>
            </div>
        </div>
    )
}

export default Movie
