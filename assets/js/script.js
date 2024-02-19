const tmdbKey = '8f9c86e8f505462dfb762e6bc1370816';
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
    const genreRequestEndpoint = "/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

    // Make request to the endpoint
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            const genres = jsonResponse.genres;
            return genres;
        }
        throw new Error("Error while fetching genres")
    } catch(error) {
        console.log("Error while fetching genres ", error)
    }
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
playBtn.addEventListener("click", showRandomMovie);