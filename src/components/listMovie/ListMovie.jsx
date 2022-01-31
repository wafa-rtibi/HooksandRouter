import React  from 'react'
import { moviesData } from '../data/data'
import { Link } from 'react-router-dom'
import MovieCard from '../movieCard/MovieCard.jsx'
import '../style/listMovie.scss'


const ListMovie = ({genremovie}) => {
    return (
        <>
        <div id='movies' className='movies'>
            { moviesData.filter(el=>genremovie=="all"? el : el.genre==genremovie.toLowerCase())
            .map(
                el =>
                <Link className='element' to={`/${el.id}`}>
                    <MovieCard  key={el.id} title={el.title} description={el.description} rate={el.rate} trailer={el.trailer} posterUrl={el.posterUrl}/> 
                </Link>
                
            )
            }
        </div>

        </>
    )
}

export default ListMovie
