import * as React from 'react';
import Image from 'next/image'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';

export default function MiniCard({src, label, text, backgroundColor}) {
  return (
      // primeiro card
    <Card sx={{ width: 250 }} style={{backgroundColor: backgroundColor, borderRadius:"20px", height:"200px",    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
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
            <p style={{color:"white"}}>
                {text}
            </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
