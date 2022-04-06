import React, { Component, useEffect, useState } from "react";
import { MovieList } from "./MovieList";
import {
  addMovie,
  updateMovie,
  deleteMovie,
  getMovieList,
  getMovie,
  uploadFile,
} from "../services/MovieService";
import { AddUpdateMovie } from "./MovieAddEdit";

const HomePage = () => {
  const [movies, setMovies] = React.useState([]);
  const [movie, setMovie] = React.useState({
    ID: 0,
    title: null,
    review: null,
    rating: null,
  });
  const [isUpdateInd, setIsUpdateInd] = React.useState(false);

  useEffect(() => setMoviesListFunc(), movies);

  // function setMovies() {
  //   movies = moviesResponse;
  // }
  // .then(moviesResponse => {
  //   console.log(movies)
  //   movies = moviesResponse
  // });

  const setMoviesListFunc = () => {
    getMovieList().then((response) => {
      console.log(response);
      setMovies(response);
    });
  };

  const addMovieFunc = ({ image, imageName }) => {
    addMovie(movie).then((response) => {
      console.log(response);

      const imgData = {
        formFile: image,
        fileName: imageName,
      };

      uploadFile(imgData);

      setMovie(response);
      setIsUpdateInd(false);
      setMoviesListFunc();
    });
  };

  const updateMovieFunc = ({ image, imageName }) => {
    updateMovie(movie).then((response) => {
      console.log(response);

      const imgData = {
        formFile: image,
        fileName: imageName,
      };

      uploadFile(imgData);

      setIsUpdateInd(false);
      setMoviesListFunc();
    });
  };

  const editMovieFunc = (movieId) => {
    getMovie(movieId).then((response) => {
      console.log(response);
      setMovie(response);
      setIsUpdateInd(false);
      setIsUpdateInd(true);
    });
  };

  const cancelUpdateFunc = () => {
    setIsUpdateInd(false);
  };

  const deleteMovieFunc = (movieId) => {
    deleteMovie(movieId).then((response) => {
      console.log(response);
      setMovie({ ID: 0, title: null, review: null, rating: null });
      setIsUpdateInd(false);
      setMoviesListFunc();
    });
  };

  const onChangeAddEditMovieForm = (e) => {
    const cMovie = { ...movie };
    if (e.target.name !== "imgPath") {
      cMovie[e.target.name] = e.target.value;
    } else {
      cMovie[e.target.name] = "./" + e.target.files[0].name;
    }
    setMovie(cMovie);
  };

  return (
    <div>
      <h1>Movie Rating Database!</h1>
      <p>
        Welcome to the movie rating database. Below is a list of all the movies
        currently stored in this rating database.
      </p>
      <p>How to use the Movie Rating Database:</p>
      <ul>
        <li>Movies can be added with the Add Button.</li>
        <li>
          Select 'Edit' next to a movie record from the grid below to to edit
          the review.
        </li>
        <li>
          Select 'Delete' next to a the movie record from the grid below to
          remove the record.
        </li>
      </ul>
      {/* <button type="button" onClick={setMoviesFunc()}>Get Movies</button> */}
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <MovieList AllMovies={movies} SelectMovie={editMovieFunc} />
          </div>
          <div className="col-md-7">
            <AddUpdateMovie
              onChangeAddEditMovieForm={onChangeAddEditMovieForm}
              addMovie={addMovieFunc}
              updateMovie={updateMovieFunc}
              isUpdateInd={isUpdateInd}
              movieObj={movie}
              cancelUpdate={cancelUpdateFunc}
              deleteMovie={deleteMovieFunc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
