import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovieCredits } from "../api/tmdb-api";
import CastList from "../components/CastMemberList";

const MoviePage = (props) => {
  const { id } = useParams();

  const { data: movie, error: movieError, isLoading: isMovieLoading, isError: isMovieError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  const { data: credits, error: creditsError, isLoading: isCreditsLoading, isError: isCreditsError } = useQuery(
    ["credits", { id: id }],
    getMovieCredits
  );

  if (isMovieLoading || isCreditsLoading) {
    return <Spinner />;
  }

  if (isMovieError) {
    return <h1>{movieError.message}</h1>;
  }

  if (isCreditsError) {
    return <h1>{creditsError.message}</h1>;
  }

  return (
    <>
      {movie && credits ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <CastList cast ={credits.cast.slice(0, 7)}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;