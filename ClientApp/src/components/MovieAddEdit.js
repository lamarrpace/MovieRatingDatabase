import React, { useEffect, useState } from "react";
import axios from "axios";

// const [movie, setMovie] = React.useState({})

export const AddUpdateMovie = ({
  onChangeAddEditMovieForm,
  addMovie,
  updateMovie,
  isUpdateInd,
  movieObj,
  cancelUpdate,
  deleteMovie,
}) => {
  const [image, setImage] = React.useState();
  const [imageName, setImageName] = React.useState();
  const [movie, setMovie] = React.useState({
    id: null,
    title: null,
    review: null,
    rating: null,
  });

  useEffect(() => loadForm(), [isUpdateInd]);

  const loadForm = () => {
    if (isUpdateInd) {
      setMovie(movieObj);
    } else {
      setMovie({ id: null, title: "", review: "", rating: "" });
    }
  };

  const HandleControlledInputChange = (e) => {
    const cMovie = { ...movie };
    cMovie[e.target.name] = e.target.value;
    setMovie(cMovie);
    onChangeAddEditMovieForm(e);
  };

  const onSaveImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
      onChangeAddEditMovieForm(e); //have to find proper name of image path to send back
    }
  };

  return (
    <div className="container mrgn-tb">
      <div className="row">
        <div className="col-md-7">
          <h4 hidden={isUpdateInd}>Add Movie Review</h4>
          <h4 hidden={!isUpdateInd}>Edit Movie Review</h4>
          <form>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Title: </label>
                <input
                  type="text"
                  onChange={(e) => HandleControlledInputChange(e)}
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="Movie Title"
                  value={movie.title}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Review: </label>
                <textarea
                  type="text"
                  onChange={(e) => HandleControlledInputChange(e)}
                  className="form-control"
                  name="review"
                  id="review"
                  placeholder="Movie Review"
                  value={movie.review}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-7">
                {/* <button type="button" onClick={uploadImage}>Add image</button> */}
                <label>Image:</label>
                <input type="file" name="imgPath" onChange={onSaveImage} />
              </div>
              <div className="form-group col-md-5">
                <label>Rating out of 10: </label>
                <input
                  type="number"
                  onChange={(e) => HandleControlledInputChange(e)}
                  className="form-control"
                  name="rating"
                  id="rating"
                  placeholder="0"
                  value={movie.rating}
                  min="1"
                  max="10"
                />
              </div>
              <img src={image} className="form-group col-md-7" />
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <button
                  type="button"
                  onClick={() => addMovie({ image, imageName })}
                  hidden={isUpdateInd}
                >
                  Add Movie Review
                </button>
                <button
                  type="button"
                  onClick={() => updateMovie({ image, imageName })}
                  hidden={!isUpdateInd}
                >
                  Edit Movie Review
                </button>
                <button
                  type="button"
                  onClick={() => deleteMovie(movie.id)}
                  hidden={!isUpdateInd}
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => cancelUpdate()}
                  hidden={!isUpdateInd}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateMovie;
