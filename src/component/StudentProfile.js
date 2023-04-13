import React from "react";
import { useParams } from "react-router-dom";
import Base from "../Base/Base";

const StudentProfile =({student})=>{
    const {id}=useParams()
    const studentid =student[id]
    return(

        <Base
        title ="student profile"
        desrciption="Inidividual Student profile"
>
        <div>
           <h1>students profile</h1> 
           <h2>Name :{studentid.name}</h2>
           <p>school :{studentid.school}</p>
           <p>gender: {studentid.gender}</p>
           <p>yearsOfExperience :{studentid.yearsOfExperience}</p>
        </div>

        
        </Base>
    )
}
export default StudentProfile