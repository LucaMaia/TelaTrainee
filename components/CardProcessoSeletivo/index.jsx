import React from "react";
import Image from 'next/image'

import styles from '../../styles/ProcessoSeletivo.module.css'

import Card from '@mui/material/Card';
import {CardActionArea} from '@mui/material';

export default function CardProcessoSeletivo({title,description,date,text,number, image}) {
  return (
    <>
        <Card sx={{ maxWidth: 800}} style={{
            borderRadius:"20px", 
            height:"150px",    
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", 
            margin:"0 auto",
            background:"#7a297a",
        }}>
                <CardActionArea>
                        <div className={styles.item}>
                            <div className={styles.num}>{number}</div>

                            <div className={styles.info}>
                                <div style={{display:"flex", flexWrap:"wrap"}}> 
                                    <h2 style={{paddingLeft:"5px",fontWeight:"bold", fontSize:"20px"}}>{title}</h2>
                                    <span style={{paddingLeft:"5px",color:"violet",fontWeight:"bold"}}>{description}</span>
                                </div>
                                
                                <p className={styles.date}>{date}</p>
                                <p className={styles.desc}>{text}</p>
                            </div>
                        </div>
                </CardActionArea>
        </Card>
        

                {/* <div style={{margin:"0 auto", border:"1px solid red", display:"flex", justifyContent:"center"}}>
                       <Image
                            src={image}
                            width={150}
                            height={100}
                        />
                  </div> */}

        {/* <div className={styles.seta}>
            <span></span>
        </div> */}
    </>
  )
}