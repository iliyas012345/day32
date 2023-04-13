import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

export function StudentsDetails ({student,setStudent}){
const history=useHistory()

useEffect(()=>{
  if (!localStorage.getItem("user-name")){
    history.replace("/register")
  }
},[])

const deletedata=async(studId)=>{
  try {

    const response =await fetch(`https://637724c881a568fc250d2819.mockapi.io/mockapi/users/${studId}`,{
      method :"DELETE",

    })
    const data =await response.json() 
    console.log(data)
    const selectedStudents = student.filter((stud)=>stud.id !==studId)
setStudent(selectedStudents)
    
  } catch (error) {
    console.log("error occured")
    
  }

}
   return(
      <Base

title="Hogwarts School"
desrciption="students details"
>
  <div className='contained'>
<div className='grid'>
             {student.map((stud, id)=>(
                <Card sx={{ maxWidth: 345 }} key={id} className='card'>
                
                 <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                    Name: {stud.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    School: {stud.school}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                   Gender:{stud. gender} 
                   </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience:{stud. yearsOfExperience}years
                   </Typography>
                 </CardContent>
                 <CardActions>
                  <Button onClick={()=> history.push(`/edit/${id}`)} variant="contained" color="success">Edit</Button>
                  <Button onClick={()=>deletedata(stud.id)} variant="contained" color="error">Delete</Button>
                  <Button onClick={()=>history.push(`/student/${id}`)}>View students</Button>
                </CardActions>
              </Card> 
             ))}
             </div>
        </div>
        </Base>
    )
}
