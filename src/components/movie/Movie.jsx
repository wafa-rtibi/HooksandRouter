import React,{useState} from 'react'
import { moviesData } from '../data/data'
import {Button} from 'react-bootstrap'
import {useMatch} from "react-router-dom";
const Movie=() => {
    const match=useMatch("/:id")
    const [show, setShow] = useState(false)
    const movi= moviesData.find(el=>el.id==match.params.id)
    var dataMovie
    if (movi)
        {dataMovie=
            <div> 
                    {
                        show?
                        <iframe 
                                allow='autoplay'
                                allowfullscreen
                                style={{
                                position:'absolute',
                                width:'100%',
                                left:'50%',
                                top:'50%',
                                height:'100%',
                                objectFit:'cover',
                                transform:'translate(-50%,-50%)',
                                zIndex:'-1'}}
                                src={`${movi.trailer}?autoplay=1`}
                                >

                        </iframe> 
                        :
                        <>
                                <h1>{movi.title}</h1>
                            <h2>{movi.description}</h2>

                            <iframe  
                            width="420"
                            height="315"
                            src={movi.trailer}>
                            </iframe>
                            <Button variant="danger" onClick={()=>setShow(true)}>Watch Now</Button>
                        </>
                    }

            </div>
        }
        else {dataMovie=<div> Movie Not Found !!</div>}

        return (
        <div>
            <div>{dataMovie}</div>
        </div>
    )
}

export default Movie