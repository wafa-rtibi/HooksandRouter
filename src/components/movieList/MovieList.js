import React ,{useState} from 'react'
import MovieCard from '../movieCard/MovieCard'
import {moviesData} from '../data/data'
import '../style/MovieList.css'
import AddMovie from '../add/AddMovie'




const MovieList = (props) => {
const [movies, setMovies] = useState(moviesData)
const add =(newMovie)=>setMovies([...movies, newMovie])

console.log(movies)

    return (
        <>
        <AddMovie add={add}></AddMovie>
        <div className="liste">
            {
            movies
            .filter(el=> el.title.toLowerCase().includes(props.valeur.toLowerCase()) 
            && el.rate>=props.value
            ) 
            .map(el=><MovieCard key={el.id} title={el.title} description={el.description} rate={el.rate}
            trailer={el.trailer} posterUrl={el.posterUrl}/>)
            } 
        </div>
        </>
    
    )
}

export default MovieList
