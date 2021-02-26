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
  renderMovies();
}

function renderMovies() {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
}

addMovieBtn.addEventListener("click", addMovieHandler);
