import { Component } from 'react'
import {Card , Col} from 'react-bootstrap'
// import CommentArea from './CommentArea'
class Single extends Component{
   
    state={
        // selected:false,
       
    }
    render(){
        return(


             <Col xs={6} md={2} className= "mb-3" >
           
            <Card  className="display-cards" onClick={(e)=>{
                    
                // this.setState({selected:!this.state.selected},
                   this.props.change(this.props.bookk)
                    
                //     )
            }}
            
            // style={{ border: this.state.selected ? "3px solid red" : "none" }}
            style={{
                border:
                  this.props.bookTitleProp === this.props.bookk
                    ? '3px solid red'
                    : 'none',
              }}
            >
                    
                        <Card.Img variant="top" src={this.props.bookk?.img} />
                             <Card.Body className="d-flex justify-content-center align-items-center">
                                        <Card.Title style={{'fontSize': "10px"}}>{this.props.bookk ? this.props.bookk.title : ""}</Card.Title>
    
       
                            </Card.Body>
                        
                         
                    </Card>
                     {/* {this.state.selected && (  <CommentArea id={this.props.bookk?.asin}/>)} */}
            
                    </Col>
               
                

                  
        )
    }
   
}
export default Single