
import { useEffect, useState } from "react";
import { ListGroup , Button, Spinner,Badge, Alert} from "react-bootstrap";
import AddComment from './AddComment'

const CommentAreaRight=({id})=>{
  
    const[comments, setComments]=useState([])
    const[isLoading,setisLoading]=useState(true)
    const[alert,setAlert]=useState(false)

    useEffect(()=>{
        fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        fetchComments()
        setisLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
 
    const alerttimeout=()=>{

        setAlert(true)
        setTimeout(() => {
            setAlert(false)
       }, 2000)
     
     }
   const fetchComments=async()=>{
                try{
                   
                    let response=await fetch (" https://striveschool-api.herokuapp.com/api/comments/"+id,{headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzU2OTQxMjEsImV4cCI6MTY3NjkwMzcyMX0.XCiJNQtp5rz9kE16LIrlcsAouLOCn8m62yszme1VQ6Q"     }} )
                    if(response.ok){
                        let data=await response.json()
                    
                     
                        setComments(data)
                        setisLoading(false)
                    }
                    else{
                    
                            setisLoading(false)
                    }
                    
                   
                }
                catch(error){
                    
                    setisLoading(false)
                    
                }
            }
   const  deleteComment = async (id) => {
                // eslint-disable-next-line no-unused-vars
                let res = await fetch(
                  "https://striveschool-api.herokuapp.com/api/comments/" + id,
            
                  {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzU2OTQxMjEsImV4cCI6MTY3NjkwMzcyMX0.XCiJNQtp5rz9kE16LIrlcsAouLOCn8m62yszme1VQ6Q"  ,
                    },
                  }
                );
                if(res.ok){
                    alerttimeout()
                }
             
               fetchComments()
              };
  
 
 

  
    return(
       
<>

{ alert && (
                 <Alert variant="danger" > Comment deleted</Alert> 
                

             ) }
{isLoading &&   ( <div className="d-flex justify-content-center"><Spinner animation="border" variant="secondary"  /></div>)}
{comments.length=== 0 ? (<div>Be the first one to comment!</div>) : (<ListGroup>


   
  
   
         {comments.map((c)=>{
            
             return     <ListGroup.Item className=" mt-3 list d-flex flex-column w-100" key={c._id}>
               
                <p  className="py-3 com px-3" >  <Badge variant="info" className="truncate">{c.author} </Badge> {c.comment}</p>    
                <div className="d-flex align-items-center justify-content-around mt-1">
              
                <Badge variant="danger" className="p-1 mr-1"> Rating : {c.rate} / 5 </Badge>
              
             <Button variant="danger" size="sm" className="p-n5" onClick={(e) => {
                  e.preventDefault()
                deleteComment(c._id);
                  
                }}>x</Button>
                </div>
                
          
             </ListGroup.Item>
          })}
     
   
</ListGroup>)}

<AddComment id={id} fetchh={fetchComments}  />   
</>
 
    )

}
export default CommentAreaRight