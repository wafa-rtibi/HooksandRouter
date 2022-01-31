import { ArrowBackIosOutlined,ArrowForwardIosOutlined } from '@material-ui/icons'
import React,{useRef,useState} from 'react'
import {moviesData} from '../data/data'
import '../style/listItem.scss'
import '../style/List.scss'
import { Rate } from 'antd'
import {Link} from 'react-router-dom'

const List = ({title,id}) => {
    const listref = useRef()
    const [slideNumber, setSlideNumber] = useState(0)

    const handleClick=(direction)=>{
        let distance = listref.current.getBoundingClientRect().x-50
        
        if(direction=="right" && slideNumber<5 ){
            setSlideNumber(slideNumber+1)
            listref.current.style.transform=`translateX(${-230+distance}px)`
        }
        if( direction=="left" && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listref.current.style.transform=`translateX(${230+distance}px)`
        }
        
    }
    return (
        <div id={id} className='list'>
            <span  className="listTitle">{title}</span>
            <div className="wapper">
                <ArrowBackIosOutlined  onClick={()=>handleClick("left")} className="sliderArrow left"/>
                    <div className='listItem' ref={listref}>
                            {moviesData.map(el=>
                            <Link to={`/${el.id}`}  style={{color:'white'}}>
                                    <div className='movieItem' >
                                            <img src={el.posterUrl} alt="movie"/>
                                            <span className="title">{el.title}</span>
                                            <div className="movieHover">
                                                <img src={el.posterUrl} alt="movie"/>
                                                <span className="title">{el.title}</span>
                                                <span id='description'>{el.description}</span>
                                                <Rate disabled defaultValue={el.rate} />
                                                <a href={el.trailer}>watch it</a>                                          </div>
                                    </div></Link>)}
                    </div>
                <ArrowForwardIosOutlined onClick={()=>handleClick("right")} className="sliderArrow right"/>
            </div>
        </div>
    )
}

export default List
