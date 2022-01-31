import React,{useState,useEffect} from 'react'
import Featured from '../featured/Featured'
import List from '../list/List'
import Navbaar from '../navbar/Navbaar'
import '../style/Home.scss'
import Genre from '../genre/Genre.jsx'
import { moviesData } from '../data/dataII'


const Home = ({match}) => {
    const rating =[]
    moviesData.forEach(el=>rating.push(el.rate))

    const [movie, setMovie] = useState(moviesData[0])
    useEffect(() => { 
            setMovie( movie.id<13 ? moviesData[movie.id++] : moviesData[0]) 
    },[])

    return (
    <div className="home">
        <Navbaar/>
        <Featured  movie={movie}  rate={rating[movie.id]}/>
        <List match={match} title={'continue to watch'}/>
        <List id="new" match={match} title={'Now and Popular'}/>
        <Genre/>
    </div>
    )
}

export default Home
