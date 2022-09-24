import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MiniCard() {
  return (
    <Card sx={{ width: 200 }} style={{backgroundColor:"red", borderRadius:"30px"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
                <Image 
                  src="/benefs/food.svg" 
                  // className={styles.logo} 
                  width={100} 
                  height={200}
                />

          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
