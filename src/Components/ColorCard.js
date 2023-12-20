import React from 'react'
// import './Color.css'
import Data from './Data';
const ColorCard=(props)=>{
    console.log(Data[0]);
    return(
        <div style={{
            height:"300px",
            width:"250px",
            border:"2px solid black",
            margin:"20px",
            display:"flex",
            flexWrap:"wrap",
            boxShadow:"2px 2px 2px 2px black , -2px -2px 2px 2px 2px black"
          
          
        }}>
        <div style={{
            height:"70%",
            width:"100%",
            backgroundColor:props.code
        
           
        }}>

        </div>
        <div>
        <h4 style={{
            color:props.code,
            fontSize:"1.2rem",
            fontWeight:"800"
        }}>{props.code}</h4>
        <p style={{
            color:props.code,
            fontSize:"1.2rem",
            fontWeight:"500"
        }}>
        {props.name}</p>
        </div>
        
        </div>
    )
}

export default ColorCard;