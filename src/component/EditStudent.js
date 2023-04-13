import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../Base/Base";
import { studentValidationSchema } from "./Addstudent";



const EditStudent =({student,setStudent})=>{
    const {id}=useParams()
    const history=useHistory()
    const[editId,setEditId]=useState("")
    const students=student[id]
 

const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues : {
      name :students.name,
      school :students.school,
      gender:students.gender,
      experience:students.experience,
    },
    validationSchema:studentValidationSchema,
    onSubmit : (editedStudent)=>{
      console.log("onSubmit triggerd",editedStudent)
      updateStudentData(editedStudent)
    }
  })




useEffect(() =>{
     setEditId(students.id)
      
    

},[])

const updateStudentData = async(editedStudent) =>{
    try {
        
          const response= await fetch (`https://637724c881a568fc250d2819.mockapi.io/mockapi/users/${editId}`,{
            method :"PUT",
            body : JSON.stringify(editedStudent),
            header :{
                "Content-Type": "application/json"
            },
          })
          const data = await response.json();
          console.log(data)
          if (data){

          const editStudentIndex =student.findIndex((stud)=> stud.id ===editId)
    
    
    student[editStudentIndex] =editedStudent
    setStudent([...student])
    
    history.push("/students")

          }  
    } catch (error) {
        console.log(error)
    }
    
    
    }
    return(
        <Base
        title="Edit the Student"
        desrciption="you can a student data here"
        
        >
            <div className='input'>
            <form onSubmit={handleSubmit}>
  
  <TextField 
  fullWidth label="Enter the Name"
  onChange={handleChange}
   value={values.name}
   onBlur= {handleBlur}
   name="name"
  id="fullWidth" />
  {touched.name&& errors.name ? <p style={{color:"darkgrey"}}> {errors.name}</p>:""}
  
  <TextField
  fullWidth label="Enter the School"
  onChange={handleChange}
   value={values.school}
   onBlur= {handleBlur}
   name="school"
   id="fullWidth" />
   { touched.school&& errors.school ? <p style={{color:"red"}}> {errors.school}</p>:""}
  
  <TextField 
  fullWidth label="Enter the Gender"
  onChange={handleChange}
   value={values.gender}
   onBlur= {handleBlur}
   name="gender"
  id="fullWidth" />
  {touched.gender&& errors.gender? <p style={{color:"blue"}}> {errors.gender}</p>:""}
  
  <TextField 
  fullWidth label="Enter the Experience"
  onChange={handleChange}
   value={values.experience}
   onBlur= {handleBlur}
  name="experience"
  id="fullWidth" />
  {touched.experience&& errors.experience ?<p style={{color:"chocolate"}}> {errors.school}</p>:""}
  
  
  
  <Button 
  type="submit"
variant="contained"
color="secondary"
//onClick={updateStudentData}
 >update</Button> 

  </form>







</div>
        </Base>
    )
}
export default EditStudent

