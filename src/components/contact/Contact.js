import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../style/Contact.css'

const Contact = () => {
    return (
        <div className="font">
            <Link style={{margin:'10px'}} to='/contact'>Home</Link>
            <Link to='/'>Movie List</Link>
            <h1>Movies Time</h1>
           
            
        </div>
    )
}

export default Contact
