using Microsoft.AspNetCore.Http;

namespace congaDemoApp.Model
{
    public class FileModel
    {
        public string FileName { get; set; }

        public IFormFile FormFile { get; set; }
    }
}