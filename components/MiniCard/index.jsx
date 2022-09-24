import * as React from 'react';
import Image from 'next/image'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

export default function MiniCard({src, label, text, backgroundColor}) {
  return (
      // primeiro card
    <Card sx={{ width: 200 }} style={{backgroundColor: backgroundColor, borderRadius:"30px", height:"300px"}}>
      <CardActionArea>
        <CardContent>
          <p style={{color:"white"}}>
              {label}
          </p>
                <Image 
                  src={src}
                  width={100}
                  height={200}
                />
            <p style={{color:"white"}}>
                {text}
            </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
