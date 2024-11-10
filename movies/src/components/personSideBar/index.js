import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";

const PersonSidebar = ({ person }) => {
  return (
    <Card sx={{ maxWidth: 300, padding: 2, margin: "20px auto" }}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Avatar
            alt={person.name}
            src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h2" gutterBottom>
            {person.name}
          </Typography>
        </Grid>
      </Grid>

      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          Known For:
        </Typography>
        <Typography variant="body1">{person.known_for_department}</Typography>

        <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
          Birthday:
        </Typography>
        <Typography variant="body1">{person.birthday}</Typography>

        <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
          Place of Birth:
        </Typography>
        <Typography variant="body1">{person.place_of_birth}</Typography>

        <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
          Also Known As:
        </Typography>
        {person.also_known_as.map((alias, index) => (
          <Typography key={index} variant="body2">
            {alias}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default PersonSidebar;
