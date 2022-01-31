import { Info, ArrowBackIos, PlayArrow } from '@material-ui/icons'
import React,{useState} from 'react'
import '../style/Featured.scss'
import { Rate } from 'antd';

const Featured = ({movie,rate}) => {

    const [show, setShow] = useState(false)

    return (
        <div className='featured'>
            {
                    show? <iframe 
                        allow='autoplay'
                        allowfullscreen
                        width="100%"
                        height="100%"

                        //style={{position:'absolute',objectFit:'cover',zIndex:'-1',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                        src={`${movie.trailer}?autoplay=1`}>
                    </iframe> 
                    :
                    null
                    }
            <img src={movie.image} alt="poster" />
            <div className="info">
                <span className="title">{movie.title}</span>
                <Rate disabled defaultValue={rate} />
                <span className="desc">
                    {movie.description}
                </span>
                
                <div className="buttons">
                    <button className='play' onClick={()=>setShow(!show)}>
                        {show?
                        <>
                            <ArrowBackIos/>
                            <span>Back</span>
                            </>
                        :
                        <>
                            <PlayArrow/>
                            <span>Watch trailer</span>
                        </>
                        }   
                    </button>
                    <button className='more'>
                        <Info/>
                        <span>more information</span>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Featured
