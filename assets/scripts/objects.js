const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

function addMovieHandler() {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title.trim() === "" || extraValue === "" || extraName === "") {
    return;
  }

  const newMovie = {
    info: {
      title, //you can omit the colon and value if it has same identifier
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(newMovie);
}

addMovieBtn.addEventListener("click", addMovieHandler);
