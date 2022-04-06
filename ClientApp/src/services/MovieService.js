import axios from "axios";

export async function getMovieList() {
  const response = await fetch("/api/movies");
  return await response.json();
}

export async function getMovie(id) {
  const response = await fetch("/api/movie/" + id, {
    method: "GET",
    headers: {},
  });
  return await response.json();
}

export async function addMovie(data) {
  const response = await fetch("/api/addMovie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function updateMovie(data) {
  const response = await fetch("/api/updateMovie", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response;
}

export async function deleteMovie(id) {
  const response = await fetch("/api/deleteMovie/" + id, {
    method: "DELETE",
    headers: {},
  });
  return await response;
}

export async function uploadFile(data) {
  try {
    const response = await axios.post("/api/file", data);
    console.log(response);
  } catch (ex) {
    console.log(ex);
  }
}
