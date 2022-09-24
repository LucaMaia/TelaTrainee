import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import ImageAvatars from '../../components/Avatar'


export default function CardComponent() {
  return (
    <Card sx={{ maxWidth: 500 }} style={{backgroundColor:"blue", borderRadius:"20px"}}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          <div style={{display:"flex",paddingTop:"20px"}}>
            <ImageAvatars/>
              <div style={{padding:"20px"}}>
                <Typography gutterBottom variant="h5" component="div">
                  Davi Galati
                </Typography>
                <p>Analista de Banco de dados</p>
              </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
