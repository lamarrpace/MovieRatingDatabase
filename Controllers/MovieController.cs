using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using congaDemoApp.Model;

namespace congaDemoApp.Controllers
{
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly ILogger<MovieController> _logger;

        static readonly IMovieRepository repository = new MovieRepository();

        public MovieController(ILogger<MovieController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/movies")]
        public IEnumerable<MovieModel> GetAllMovies()
        {
            return repository.GetAll();
        }

        [HttpGet]
        [Route("api/movie/{id}")]
        public MovieModel GetMovie(int id)
        {
            return repository.GetById(id);
        }

        [HttpPost]
        [Route("api/addMovie")]
        [Consumes("application/json")]
        public MovieModel AddMovie(MovieModel movie)
        {
            return repository.Add(movie);
        }

        [HttpPut]
        [Route("api/updateMovie")]
        [Consumes("application/json")]
        public void UpdateMovie(MovieModel movie)
        {
            repository.Update(movie);
        }

        [HttpDelete]
        [Route("api/deleteMovie/{id}")]
        [Consumes("application/json")]
        public void DeleteMovie(int id)
        {
            repository.Delete(id);
        }
    }
}