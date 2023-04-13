import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import * as yup from 'yup';
import { useFormik } from 'formik'



 export const studentValidationSchema =yup.object({
  name:yup.string().required("Please fill in your name..."),
  school: yup.string().required("please fill in your batch")
  .min(5, "hey you need minium five values"),
  gender: yup.string().required("please mention your gender"),
  experience: yup.string().required("why not tell your experience")

})


const AddStudents =({student,setStudent}) =>{

  const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues : {
      name : "",
      school :"",
      gender:"",
      experience:"",
    },
    validationSchema:studentValidationSchema,
    onSubmit : (newStudent)=>{
      console.log("onSubmit triggerd", newStudent)
      addNewStudent(newStudent)
    }
  })

  const history=useHistory()

//  const[id,setId]=useState("")
// const[name,setName]=useState("")
// const[school,setSchool]=useState("")
// const[gender,setGender]=useState("")
// const[experience,setExperience]=useState("")
const addNewStudent= async(newStudent)=>{
  
  try {
    
     const response = await fetch("https://637724c881a568fc250d2819.mockapi.io/mockapi/users",{
      method : "POST",
      body : JSON.stringify(newStudent),
      headers:{
        "Content-Type":"application/json"
      },
    });
    const data =await response.json()
    console.log(data)
  setStudent([...student,data])
  
  
  history.push("/students")
    
  } catch (error) {
    console.log("error occured")
  }
    
  }



    return(
        <Base
        title="Add the Student"
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
variant="contained"
type="submit"
color="success"
//  onClick={addNewStudent}
>Add data</Button>
</form>




</div>
        </Base>
    )
}

export default AddStudents