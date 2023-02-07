
import { useState } from "react"
import { Container, Row, Col , Card,  Button } from "react-bootstrap"
import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'
import SingleBook from "./SingleBook"


 




const AllTheBooks=()=>{
  
    const [genre,setGenre]=useState("Fantasy")
    const[renderbook, setRenderBook]=useState(fantasy)
    const [selectedBook,setSelectedbook]=useState(fantasy[0])

        return(
            
            <Container >
                <Container className="d-flex justify-content-around mb-4">

                     <Button variant="outline-dark" onClick={()=>{
                        setGenre("Fantasy")
                        setRenderBook(fantasy)
                     }}>Fantasy</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        setGenre("History")
                        setRenderBook(history)
                       
                     }}>History</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        setGenre("Horror")
                        setRenderBook(horror)
                        
                     }}>Horror</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        setGenre("Romance")
                        setRenderBook(romance)
                      
                     }}>Romance</Button>
                      <Button variant="outline-dark" onClick={()=>{
                        setGenre("Sci-Fi")
                        setRenderBook(scifi)
                       
                     }}>Sci-Fi</Button>
                   
                 
          
        
                </Container>
                    <h3>{genre}</h3>
                    <Row className="justify-content-center">
                    {
                       
                        renderbook.map((book)=>{
                            return(
                                <Col xs={4} sm={2} lg={1} key={book.asin} className="d-flex align-items-stretch mx-n3" onClick={()=>{

                                    setSelectedbook(book)
                                }}>
                                <Card>
                                    <Card.Img variant="top" src={book.img} className="image" />
                                </Card>
                                </Col>
                            )
                        })
                    }
                    
               
            </Row>
            <Container className="d-flex justify-content-center">
          
            <Row className="mt-4 justify-content-center single-card">
            <h3 className="small"><strong>Click one of the books to view! </strong></h3>
            <Col className="text-center " >

                <SingleBook CurrentBook={selectedBook}/>

            </Col>
            </Row>
            </Container>
        </Container>
        )

    
   
}
export default AllTheBooks