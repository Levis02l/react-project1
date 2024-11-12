import React from "react";
import { getUpComingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAdd from "../components/cardIcons/PlaylistAdd";

const UpcomingPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpComingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAdd movie={movie}/>;
      }}
    />
  );
};

export default UpcomingPage;
