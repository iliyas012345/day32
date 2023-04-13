import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

const Nopage =() =>{
    const history=useHistory()
    return(
        <Base
        title="your lost your way"
        desrciption="please click the home page"

        >

            <Button 
            variant="contained"
            color="success"
            onClick={()=> history.push("/dashboard")}>
             Home
            

            </Button>
        </Base>
    )
}
export default Nopage