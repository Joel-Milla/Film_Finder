// Populate dropdown menus with available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById("genres");

    for (const genre of genres) {
        const option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Returns genre selection from dropdown menu
const getSelectedGenre = () => {
    const getSelectedGenre = document.getElementById("genres").value;
    return getSelectedGenre;
};

// Displays the likes and dislikes elements
const showBtns = () => {
    const btnsDiv = document.getElementById("likeOrDislikeBtns");
    btnsDiv.removeAttribute("hidden")
};

// Clear movie from screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById("moviePoster");
    const movieTextDiv = document.getElementById("movieText");
    moviePosterDiv.innerHTML = "";
    movieTextDiv.innerHTML = "";
};

// After liking movie, clear current movie and get another one
const likeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// After disliking movie, clear current movie and get another one
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement("img");
    posterImg.setAttribute("src", moviePosterUrl);
    posterImg.setAttribute("id", "moviePoster");

    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const movieTitle = document.createElement("h1");
    movieTitle.setAttribute("id", "movieTitle");
    movieTitle.innerHTML = title;

    return movieTitle;
};

// Create HTML for movie title
const createReleaseDate = (date) => {
    const movieReleaseDate = document.createElement("p");
    movieReleaseDate.setAttribute("id", "movieReleaseDate");
    movieReleaseDate.innerHTML = date;

    return movieReleaseDate;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const movieOverview = document.createElement("p");
    movieOverview.setAttribute("id", "movieOverview");
    movieOverview.innerHTML = overview;

    return movieOverview;
}

// Return random movie from first page movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    return randomMovie;
};

// Return random page of the total pages received.
const getRandomPage = () => {
    const maxNum = 500;
    const randomIndex = Math.floor(Math.random() * maxNum);

    return randomIndex;
};

// Uses the DOM to create HTML to display movie
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById("moviePoster");
    const movieTextDiv = document.getElementById("movieText");
    const likeBtn = document.getElementById("likeBtn");
    const dislikeBtn = document.getElementById("dislikeBtn");

    // Create HTML content using movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const releaseDate = createReleaseDate(movieInfo.release_date);
    const overviewText = createMovieOverview(movieInfo.overview);

    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(releaseDate);
    movieTextDiv.appendChild(overviewText);

    showBtns();
    likeBtn.addEventListener("click", likeMovie);
    dislikeBtn.addEventListener("click", dislikeMovie);
}
