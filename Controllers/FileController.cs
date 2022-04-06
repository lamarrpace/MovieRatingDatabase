using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using congaDemoApp.Model;

namespace congaDemoApp.Controllers
{
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly ILogger<MovieController> _logger;

        static readonly IMovieRepository repository = new MovieRepository();

        public FileController(ILogger<MovieController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("api/file")]
        public ActionResult Post([FromForm] FileModel file)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp/public/images", file.FileName);

                using (Stream fStream = new FileStream(path, FileMode.Create))
                {
                    file.FormFile.CopyTo(fStream);
                }

                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}