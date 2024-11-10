import CastMember from "../CastMember";
import React from 'react';
import Grid from "@mui/material/Grid2";

const CastList = ({ cast }) => {
    return (
      <Grid container spacing={3} justifyContent="center">
        {cast.map((actor) => (
          <Grid item key={actor.id} xs={6} sm={4} md={3} lg={2}>
            <CastMember
              profilePath={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          </Grid>
        ))}
      </Grid>
    );
  };
  export default CastList;