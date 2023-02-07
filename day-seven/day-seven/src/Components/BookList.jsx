import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'

import Single from './Single'
import { Row, Container , Form, Col, Button} from 'react-bootstrap'

import CommentAreaRight from './CommentAreaRight'
import { useState } from 'react'

const BookList=()=>{
  
    const[search, setSearch]=useState('')
    const [genre, setGenre]=useState("fantasy")
    const [renderbook, setRenderbook]=useState(fantasy)
    const[current,setCurrent]=useState("")

  
    const changeBookSelected = (newSelectOption) => {
     
      setCurrent(newSelectOption)
    }

        
        

        return(
          
            <Container fluid className=" mb-5 mt-5">
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                    <Form>
            <Form.Group >
              
              <Form.Control type="text" placeholder="Search" value={search} onChange={(e)=>{
               
               setSearch(e.target.value)
             
              }}/>
            
            </Form.Group>
          
              
          </Form>
                    </Col>
                </Row>
                <Container className="d-flex justify-content-around mb-4">
                 
                <Button variant="outline-dark" onClick={()=>{
                     setGenre("Fantasy")
                     setRenderbook(fantasy)
                       
                     }}>Fantasy</Button>

                      <Button variant="outline-dark" onClick={()=>{
                          setGenre("History")
                          setRenderbook(history)
                       
                     }}>History</Button>

                      <Button variant="outline-dark" onClick={()=>{
                         setGenre("Horror")
                         setRenderbook(horror)
                        
                     }}>Horror</Button>

                      <Button variant="outline-dark" onClick={()=>{
                          setGenre("Romance")
                          setRenderbook(romance)
                      
                     }}>Romance</Button>
                      <Button variant="outline-dark" onClick={()=>{
                          setGenre("Sci-Fi")
                          setRenderbook(scifi)
                       
                     }}>Sci-Fi</Button>


</Container>

<h3>{genre}</h3>
                    <Row className="mt-4 ">
                    
                     <Col xs={8} md={9}>
                        <Row>
                     {
       
      renderbook.filter((b)=>
               b.title.toLowerCase().includes(search)
       )
       .map((b)=>
       <Single bookk={b} key={b.asin}  change={changeBookSelected} bookTitleProp={current}/>
       
       )
       }
       </Row>

                   </Col>
                 
                     <Col xs={4} md={3}  className="comments sticky-top pb-5 ">
                   
                        <h5>{current.title}</h5>

                  {current  !== "" ? (<><CommentAreaRight   id={current.asin}/></>) : (<div>Select a book to view comments</div>)}
                      </Col>
   

                         </Row>
                    </Container>
        )
    
    

}
export default BookList

