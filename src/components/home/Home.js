import React ,{useState} from 'react'
import { Navbar,Container,Form,FormControl,Nav,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MovieList from '../movieList/MovieList'
import { Rate } from 'antd'
const Home = () => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [valeur, setValeur] = useState("")
    const handleChange=(event)=>setValeur(event.target.value)
    const [value, setValue] = useState(1)
    const handle = value =>setValue(value)

    return (
        <div>
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{color:"white"}}>Movies Time</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <Link style={{marginRight:'10px'}} to='/contact'> Home</Link>
                    <Link to='/'> Movie List</Link>

                </Nav>
                <Rate tooltips={desc} onChange={handle} value={value} />
                <Form className="d-flex" style={{marginLeft:"10px"}} >
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                    />
                
                <Button  variant="outline-success">Search</Button>
                
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <MovieList valeur={valeur}  value={value} />
        
        </div>
    )
}

export default Home
