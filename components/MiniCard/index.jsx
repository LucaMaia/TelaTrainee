import * as React from 'react';
import Image from 'next/image'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';

export default function MiniCard({src, label, text, backgroundColor}) {
  return (
      // primeiro card
    <Card sx={{ width: 250 }} style={{backgroundColor: backgroundColor, borderRadius:"20px", height:"200px",    boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 2.6px"}}>
      <CardActionArea>
        <CardContent>
          <p style={{color:"white"}}>
              {label}
          </p>
                <Image 
                  src={src}
                  width={50}
                  height={100}
                />
            <p style={{color:"white", fontWeight:"bold"}}>
                {text}
            </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
