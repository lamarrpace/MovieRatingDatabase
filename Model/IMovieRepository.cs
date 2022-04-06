using System;
using System.Collections.Generic;
using System.Linq;

namespace congaDemoApp.Model
{
    public interface IMovieRepository
    {
        IEnumerable<MovieModel> GetAll();

        MovieModel GetById(int id);

        MovieModel Add(MovieModel movieObj);

        void Update(MovieModel movieObj);

        void Delete(int id);
    }
}