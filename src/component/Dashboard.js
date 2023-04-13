import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

const DashBoard = ()=> {
    const history=useHistory()
    return(
        <Base

        title="Hogwarts School"
        desrciption="students details"
        login= "login id : iliyas"
        password = "password : jmm@1910"
        
        >
            <Button variant="contained"
               color="success"
               onClick={()=>history.push("/students")}
               >
                students list
            </Button>


        </Base>
    )
}

export default DashBoard