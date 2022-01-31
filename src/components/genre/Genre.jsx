import React ,{useState} from 'react'
import ListMovie from '../listMovie/ListMovie.jsx'
import '../style/genre.scss'
const Genre = () => {
    const [genre, setGenre] = useState("all");

    return (

    <>    
        <div className='genre'>
            <button onClick={()=>setGenre("all")} href="#movies">ALL</button>
            <button onClick={()=>setGenre("action")} href="#movies">ACTION</button>
            <button onClick={()=>setGenre("comedy")} href="#movies">COMEDY</button>
            <button onClick={()=>setGenre("drama")} href="#movies">DRAMA</button>
            <button onClick={()=>setGenre("herror")} href="#movies">HERROR</button>
            <button onClick={()=>setGenre("romantic")} href="#movies">ROMANTIC</button>
        </div>
        <ListMovie genremovie={genre} />
    </>     
    )
}

export default Genre
