import React from 'react';
import { Box } from '@mui/material';

import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import BackImg1 from '../../assets/icons/13.jpeg';

interface NewsCardProps {
  title: string;
  text: string;
}

export const CardItem: React.FC<NewsCardProps> = props => {
  return (
    <>
      <Box sx={{ bgColor: 'transparent' }}>
        <img
          src={BackImg1}
          alt="heroImg"
          style={{
            maxWidth: '100%',

            borderRadius: '20px',
          }}
        />
        <CardContent>
          <Typography component="h1" color="primary" gutterBottom>
            {props.title}
          </Typography>
          <Typography component="h5" color="inherit" paragraph>
            {props.text}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};

export default CardItem;
