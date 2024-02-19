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

            const genres = jsonResponse.genres;
            console.log(genres);
            return genres;
        }
        throw new Error("Error while fetching genres")
    } catch(error) {
        console.log("Error while fetching genres ", error)
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = "/discover/movie";
    const requestParams = `?api_key=${tmdbKey}` + `&with_genres=${selectedGenre}`;

    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

    // Make request to endpoint
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();

            const movies = jsonResponse.results;
            return movies;
        } 
        throw new Error("Error while getting movies")
    } catch(error) {
        console.log("Error while getting movies: ", error);
    }
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