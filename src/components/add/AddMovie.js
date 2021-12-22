import React , {useState} from 'react'
import {Modal,Button,InputGroup,FormControl} from 'react-bootstrap'


const AddMovie=({add})=> {
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState(1)
    const [poster, setPoster] = useState("")
    const [link, setLink] = useState("")
    const changeTitle =(e)=>setTitle(e.target.value)
    const changeDescription =(e)=>setDescription(e.target.value)
    const changeRate =(e)=>setRate(e.target.value)
    const changePoster =(e)=>setPoster(e.target.value)
    const changeLink =(e)=>setLink(e.target.value)
    return (
        <>
            <span style={{display:"flex",justifyContent:"center",margin:"20px"}}>
            <Button onClick={handleShow} variant="dark"> + Add Movie</Button>{' '}
            </span>
            
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                        <FormControl
                        placeholder="title"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={changeTitle}/> 
                    </InputGroup>
                    <InputGroup style={{marginBottom:"20px"}} >
                            <InputGroup.Text>Description</InputGroup.Text>
                            <FormControl as="textarea" aria-label="With textarea" 
                            onChange={changeDescription} />
                            
                    </InputGroup>
                    <InputGroup className="mb-3" >
                        <InputGroup.Text id="inputGroup-sizing-default"  >Rate</InputGroup.Text>
                        <FormControl
                        type="number"
                        placeholder="number of rate"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={changeRate}/>  
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" >Poster</InputGroup.Text>
                        <FormControl
                        placeholder="Poster url"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={changePoster}/>  
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" >Link</InputGroup.Text>
                        <FormControl
                        placeholder="https//..."
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={changeLink}/>  
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{add({title:title ,
                                                                    rate:rate,
                                                                    description:description,
                                                                    posterUrl:poster,
                                                                    trailer: link}) || handleClose() }}
                >
                Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    
        </>
        );
}

export default AddMovie
