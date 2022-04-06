using System;
using System.Collections.Generic;
using System.Linq;

namespace congaDemoApp.Model
{
    public class MovieRepository : IMovieRepository
    {
        private List<MovieModel> _movies = new List<MovieModel>();

        public MovieRepository()
        {
            _movies.Add(new MovieModel() { ID = 1, Title = "SomeTitle", Review = "SomeReview", Rating = 5.5, ImgPath = "./image1.png" });
            _movies.Add(new MovieModel() { ID = 2, Title = "SomeTitle1", Review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", Rating = 6, ImgPath = "./image2.png" });
            _movies.Add(new MovieModel() { ID = 3, Title = "SomeTitle2", Review = "SomeReview2", Rating = 9, ImgPath = "./image3.jpg" });
        }

        public IEnumerable<MovieModel> GetAll()
        {
            return _movies;
        }

        public MovieModel GetById(int id)
        {
            return _movies.SingleOrDefault(x => x.ID == id);
        }

        public MovieModel Add(MovieModel movieObj)
        {
            if (movieObj == null)
            {
                throw new ArgumentNullException("movieObj");
            }

            if (_movies.Count() > 0)
            {
                movieObj.ID = (_movies.Max(x => x.ID) + 1);
            }
            else
            {
                movieObj.ID = 1;
            }

            _movies.Add(movieObj);
            return movieObj;
        }

        public void Update(MovieModel movieObj)
        {
            if (movieObj == null || movieObj.ID == 0)
            {
                throw new ArgumentNullException("movieObj");
            }

            var record = _movies.SingleOrDefault(x => x.ID == movieObj.ID);
            if (record != null)
            {
                record.ImgPath = movieObj.ImgPath;
                record.Rating = movieObj.Rating;
                record.Review = movieObj.Review;
                record.Title = movieObj.Title;
            }
        }

        public void Delete(int id)
        {
            var recordToRemove = _movies.SingleOrDefault(x => x.ID == id);
            if (recordToRemove != null)
            {
                _movies.Remove(recordToRemove);
            }

        }
    }
}