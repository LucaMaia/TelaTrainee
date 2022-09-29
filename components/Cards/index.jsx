import * as React from 'react';
import Image from "next/image";

import styles from '../../styles/Card.module.css'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

//Componentes
import ImageAvatars from '../../components/Avatar'

export default function CardComponent({information, name , job, src}) {
  return (
    <Card sx={{ maxWidth: 520 }} className={styles.card}>
      <CardActionArea className={styles.card_action_area}>
          <div style={{paddingLeft:"20px"}}>
            <Image
                src="/benefs/Vector.svg"
                width={50}
                height={40}
                style={{opacity:"0.4"}}
            />
          </div>
              <CardContent>
                    <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
                      {information}
                    </Typography>
                <div className={styles.imagem_alinhamento}>
                  <ImageAvatars src={src}/>
                    <div style={{padding:"10px", paddingTop:"30px"}}>
                      <div style={{fontWeight:"bold", color:"white"}}>{name}</div>
                      <div style={{color:"white"}}>{job}</div>
                    </div>
                </div>
              </CardContent>
      </CardActionArea>
    </Card>
  );
}
