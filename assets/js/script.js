const tmdbKey = '8f9c86e8f505462dfb762e6bc1370816';
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("platBtn");

const getGenres = () => {

};

const getMovies = () => {
    const selectedGenre = getSelectedGenre();
};

const getMovieInfo = () => {

};

// Get a list of movies and display the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById("movieInfo");

    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }
};

getGenres().then(populateGenreDropdown);
playBtn.addEventListener("onclick", showRandomMovie);