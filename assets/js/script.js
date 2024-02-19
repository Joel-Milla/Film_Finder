const tmdbKey = '8f9c86e8f505462dfb762e6bc1370816';
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

let currentMovie = "";
let moviesLiked = [];
let moviesDisliked = [];

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
    const requestParams = `?api_key=${tmdbKey}` + `&with_genres=${selectedGenre}` + `&page=${getRandomPage()}`;

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

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;

    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

    // Make request to endpoint
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const movieInfo = await response.json();

            return movieInfo;
        }
        throw new Error("Error while getting details of movie");
    } catch(error) {
        console.log(`Error while getting details of movie: ${error}`);
    }
};

// Get a list of movies and display the info of a random movie from the list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById("movieInfo");

    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }

    // Get the info of a random movie and display it on the website
    try {
        const movies = await getMovies();
        const randomMovie = getRandomMovie(movies);
        const info = await getMovieInfo(randomMovie);

        // Save the current movie that is being displayed
        currentMovie = info;

    
        displayMovie(info);
    } catch(error) {
        console.log(`Error while showing random movie: ${error}`);
    }
};

getGenres().then(populateGenreDropdown);
playBtn.addEventListener("click", showRandomMovie);