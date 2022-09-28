import React from "react";
import styles from '../../styles/ProcessoSeletivo.module.css'

// MaterialUI
import Card from '@mui/material/Card';
import {CardActionArea} from '@mui/material';

export default function CardProcessoSeletivo({title,description,date,text,number, image}) {
  return (
    <>
        <Card sx={{ maxWidth: 800}} style={{
            borderRadius:"20px", 
            height:"150px",    
            boxShadow: "rgba(0, 0, 0, 0.15) 15px 15px 2.6px",
            margin:"0 auto",
            background:"#7a297a",
            // overflow:"visible"
        }}>
                <CardActionArea>
                        <div className={styles.item}>
                            <div className={styles.num}>{number}</div>

                            <div className={styles.info}>
                                <div style={{display:"flex", flexWrap:"wrap"}}> 
                                    <h2 style={{paddingLeft:"5px",fontWeight:"bold",color:"white", fontSize:"20px"}}>{title}</h2>
                                    <span style={{paddingLeft:"5px",color:"violet",fontWeight:"bold"}}>{description}</span>
                                </div>
                                
                                <p className={styles.date}>{date}</p>
                                <p className={styles.desc}>{text}</p>
                            </div>
                        </div>
                </CardActionArea>
        </Card>

        {/* <div className={styles.seta}>*/}
        {/*    <span></span>*/}
        {/*</div>*/}
    </>
  )
}
