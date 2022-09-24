import React from "react";
import Image from 'next/image'
import styles from '../../styles/Card.module.css'
import MiniCard from "../../components/MiniCard";

export default function Beneficios() {
  return (
    <>
        <div style={{
          textAlign:"center", 
          margin:"20px auto", 
          width:"80vw",
          height:"800px", 
          borderRadius:"20px", 
          display:"flex", 
          flexWrap:"wrap",
          justifyContent:"center",
          border:"1px solid red"
          }}>

            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", width:"80%"}}>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>


                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
            </div>
              
              
        </div>
    </>
   
  )
}