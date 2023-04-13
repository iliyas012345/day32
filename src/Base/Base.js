import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";


function Base({title,desrciption,children,login,password}){
    const history=useHistory()

    const logoutMethod=()=>{
        localStorage.removeItem("user-name")
        history.push("/dashboard")
    }
    
    return(
        <div className="main-component">
             <AppBar position ="static">
                <Toolbar variant="dense">
                    
                    <Button color='inherit'  onClick={()=> history.push("/dashboard")}>DashBoard</Button>
                    <Button color='inherit'  onClick={()=> history.push("/students")}>Students list</Button>
                    <Button color='inherit'  onClick={()=> history.push("/register")}>Login</Button>
                    <Button color='inherit'  onClick={()=> history.push("/vhch")}>Nopage</Button>
                    <Button color='inherit'  onClick={()=> history.push("/Adddata")}>AddData</Button>
                    <Button color='inherit'  onClick={logoutMethod}>logout</Button>
                </Toolbar>
            </AppBar>
        <header>
            <h1 className='heading'>{title} </h1>
            
        </header>
        <main className='main-segment'>
           <div>
            
            <h2>{desrciption}</h2></div>

            <div>
            <h2>{login}</h2>
            </div>


            <div>
            <h2>{password}</h2> 
            </div>

            
            
             <div className='children-segment'>
                {children}
                
            </div>
        </main>
            
        </div>
    )
}

export default Base;