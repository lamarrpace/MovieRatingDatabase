import React, { useEffect, useState } from "react";

const imgagesPath = require.context("../../public/images", true);

export const MovieList = ({ AllMovies, SelectMovie }) => {
  if (AllMovies.length === 0) {
    return <div />;
  }

  return (
    <div>
      {AllMovies.map((movie) => (
        <div>
          <h6> {movie["title"]} </h6>
          <form>
            <div className="row">
              <img
                className="form-group col-md-6"
                src={imgagesPath(movie["imgPath"])}
              />
              <div className="form-group col-md-6">
                <div className="row"> {movie["rating"]} / 10</div>
                <div className="row"> {movie["review"]} </div>
              </div>
            </div>
            <div className="row">
              <button
                className="form-group col-md-6"
                type="button"
                onClick={() => SelectMovie(movie["id"])}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};
