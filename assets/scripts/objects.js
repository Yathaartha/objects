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

function renderMovies(filter = "") {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    const { title: movieTitle } = info;
    console.log(otherProps);
    let text = movieTitle + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
}

function searchMovieHandler() {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
