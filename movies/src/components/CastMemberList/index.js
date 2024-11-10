import CastMember from "../CastMember";
import React from 'react';
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

const CastList = ({ cast }) => {

    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom style={{ margin: '1em 0' }}>
                Top Billed Cast
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {cast.map((actor) => (
                    <Grid key={actor.id} xs={6} sm={4} md={3} lg={2}>
                        <CastMember
                            profilePath={actor.profile_path}
                            name={actor.name}
                            character={actor.character}
                            actorId={actor.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CastList;