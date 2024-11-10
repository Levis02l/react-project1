import React from "react";
import { getCreditDetails } from "../api/tmdb-api";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PersonSidebar from "../components/personSideBar";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const CreditDetailsPage = () => {
    const { id } = useParams();
    const { data: person, error, isLoading, isError } = useQuery(["person", { id: id }], getCreditDetails)

    console.log(person)
    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {person ? (
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box display="flex" justifyContent="flex-start">
                            <PersonSidebar person={person} />
                        </Box>
                    </Grid>

                    <Grid item xs={9}>

                    </Grid>
                </Grid>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );

}
export default CreditDetailsPage