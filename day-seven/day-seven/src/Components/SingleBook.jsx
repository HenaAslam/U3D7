

import {Card , Badge} from 'react-bootstrap'
const SingleBook=({CurrentBook})=>{
 
  
        return(
            <Card>
                        <Card.Img variant="top" src={CurrentBook?.img} className="single-book"/>
                             <Card.Body>
                                        <Card.Title>{CurrentBook ? CurrentBook.title : ""}</Card.Title>
                                        <Card.Text>
                                        <Badge variant="danger">{CurrentBook?.price}</Badge>{' '}
                                    </Card.Text>
       
                            </Card.Body>
                    </Card>
        )
    
    
}
export default SingleBook