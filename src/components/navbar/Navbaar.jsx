import { ArrowDropDown, Notifications, Person, SearchOutlined } from '@material-ui/icons'
import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.scss'
import { moviesData } from '../data/data'

const Navbaar = () => {

        const [isScrolled, setIsScrolled] = useState(false)
        const [filtredData, setFiltredData] = useState([]);
        const inputRef = useRef();
        window.onscroll=()=>{
            setIsScrolled(window.pageYOffset===0? false : true)
            return()=>(window.onscroll=null)
        }
        const handleChange=(e)=>{ 
            const searchWord = e.target.value 
            const newFilter= moviesData.filter((value)=>{ if (searchWord != "")
                return value.title.toLocaleLowerCase().includes(searchWord.toLowerCase())
            })
            setFiltredData(newFilter)
        }

    return (
        <div className={isScrolled? "Navbar scrolled" : "Navbar"}>
            <div className="contenu">
                <div className="left">
                    <img src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" alt="logo" />
                    <Link to={"/"}>Home</Link>
                    <a href='#movies'>TVSeries</a>
                    <a href='#movies'>Movies</a>
                    <a href='#new'>New and Popular</a>  
                </div>
                <div className="right">
                    <div class="search-box">
                        <button class="btn-search"><SearchOutlined/></button>
                        <input 
                        ref={inputRef} 
                        type="text"
                        class="input-search" 
                        placeholder="Type to Search..."
                        onChange={handleChange}
                        onBlur={(e)=>e.target.value=""}
                        />
                    </div>
                    {
                    (filtredData.length!=0) &&  
                    <div className='result'>
                        {
                        filtredData
                        .map(
                            el=>
                            <Link to={`/${el.id}`} >    
                                <div className="item">
                                        <div className="leftItem"><img src={el.posterUrl} alt="poster"/></div>
                                        <div className="rightItem"><span className='text'>{el.title}</span></div>  
                                </div>
                            </Link>
                        )
                        }
                    </div>
                    }
                    <Notifications className='icons' />
                    <Person className='icons' />
                    <div className="profil">
                        <ArrowDropDown/>
                        <div className="options">
                            <Link to={'/'}>Settings</Link>
                            <Link to={'/'}>Login</Link>
                            <Link to={'/'}>Logout</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbaar
