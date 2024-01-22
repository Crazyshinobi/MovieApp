const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=29f06d552d1cdf5f565f9a35f776add2&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// let search = "";

// let SEARCHAPI = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=29f06d552d1cdf5f565f9a35f776add2`;

const movieBox = document.querySelector(".box-container");

const getMovies = async (api) => {
  console.log(api);
  const response = await fetch(api);
  const data = await response.json();
  showMovies(data.results);
};

const showMovies = (data) => {
  movieBox.innerHTML = "";
  data.forEach((item) => {
    console.log(item);
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="">

            <div class="title">
                <h2>${item.original_title}</h2>
                <span>Rating: ${item.vote_average}/10</span>
            </div>

            <h3>
                Description:
            </h3>
            <p> ${item.overview}</p>
            `;
    movieBox.appendChild(box);
  });
};

document.querySelector("#search").addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    search = event.target.value;
    getMovies(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=29f06d552d1cdf5f565f9a35f776add2`);
  } else {
    getMovies(APIURL);
  }
});

getMovies(APIURL);
