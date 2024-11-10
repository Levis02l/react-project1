import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CastMember = ({ profilePath, name, character }) => {
  return (
    <Card sx={{ maxWidth: 180, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="250"
        image={profilePath ? `https://image.tmdb.org/t/p/w200${profilePath}` : 'path/to/placeholder-image.jpg'}
        alt={name}
      />
      <CardContent>
        <Typography variant="subtitle1" component="div" noWrap>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CastMember;