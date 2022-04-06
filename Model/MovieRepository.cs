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