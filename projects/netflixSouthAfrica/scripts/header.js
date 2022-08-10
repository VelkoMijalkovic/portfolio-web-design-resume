let mylist = JSON.parse(localStorage.getItem("userlist")) || [];

function localStorageList(arr) {
  const slider = 0;
  const sliders = document.getElementById("myList");
  for (let i = 0; i < arr.length; i++) {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<div class="imagecont" id="${i}container">
        <img class=" slider-img" src="https://image.tmdb.org/t/p/w185/${arr[i].poster_path}"/>
        <button class="listadd" onclick="removeStorage(${i},${slider})">remove from list</button>
        </div>`
    );
  }
}

function addtolist(arr, number, slider) {
  const sliders = document.getElementById("myList");
  mylist.push(arr[number]);
  localStorage.setItem("userlist", JSON.stringify(mylist));
  fullstring = number.toString() + slider.toString();
  document.getElementById(fullstring).disabled = true;
  document.getElementById(fullstring).style.display = "none";
  sliders.insertAdjacentHTML(
    "beforeend",
    `<div class="imagecont" id="${number}container">
      <img class=" slider-img" src="https://image.tmdb.org/t/p/w185/${arr[number].poster_path}"/>
      <button class="listadd" onclick="remove(${number},${slider})">remove from list</button>
      </div>`
  );
}
function remove(number, slider) {
  mylist.splice(number, 1);
  const name = number + "container";
  const element = document.getElementById(name);
  fullstring = number.toString() + slider.toString();
  document.getElementById(fullstring).disabled = false;
  document.getElementById(fullstring).style.display = "block";
  element.remove();
  localStorage.setItem("userlist", JSON.stringify(mylist));
}
function removeStorage(number, slider) {
  mylist.splice(number, 1);
  localStorage.setItem("userlist", JSON.stringify(mylist));
  const name = number + "container";
  const element = document.getElementById(name);
  fullstring = number.toString() + slider.toString();
  element.remove();
}
const app = Vue.createApp({
  data() {
    return {
      menu: ["Home", "Tv Shows", "Movies", "Latest", "My List"],
      isActive: false,
      scrollPerClick: 250,
      imagePadding: 20,
      scrollAmount: 0,
      listVisible: false,
    };
  },
  methods: {
    showUserList() {
      this.listVisible = !this.listVisible;
    },
    importUserList() {
      localStorageList(mylist);
    },
    showUpcoming() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
        API_KEY +
        "&language=en-US&page=2"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultUpcoming = data;
          const slider = 1;
          const sliders = document.getElementById("Upcoming");
          resultUpcoming = resultUpcoming.results;
          resultUpcoming.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultUpcoming,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showLatest() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&sort_by=popularity.desc"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultLatest = data;
          const slider = 2;
          const sliders = document.getElementById("Latest");
          resultLatest = resultLatest.results;
          resultLatest.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultLatest,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showLatestTV() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
        API_KEY +
        "&with_networks=213"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultLatestTv = data;
          const slider = 3;
          const sliders = document.getElementById("LatestTV");
          resultLatestTv = resultLatestTv.results;
          resultLatestTv.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultLatestTv,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showComedy() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&with_genres=35"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultComedy = data;
          const slider = 4;
          const sliders = document.getElementById("Comedy");
          resultComedy = resultComedy.results;
          resultComedy.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultComedy,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showKids() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
        API_KEY +
        "&with_genres=10762"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultKids = data;
          const slider = 5;
          const sliders = document.getElementById("Kids");
          resultKids = resultKids.results;
          resultKids.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultKids,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showHorror() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&with_genres=27"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultHorror = data;
          const slider = 6;
          const sliders = document.getElementById("Horror");
          resultHorror = resultHorror.results;
          resultHorror.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultHorror,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showDocumentary() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
        API_KEY +
        "&with_genres=99"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultDocu = data;
          const slider = 7;
          const sliders = document.getElementById("Documentary");
          resultDocu = resultDocu.results;
          resultDocu.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultDocu,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showMusical() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&with_genres=10402"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultMusical = data;
          const slider = 8;
          const sliders = document.getElementById("Musical");
          resultMusical = resultMusical.results;
          resultMusical.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultMusical,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showFantasy() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&with_genres=14"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultFantasy = data;
          const slider = 9;
          const sliders = document.getElementById("Fantasy");
          resultFantasy = resultFantasy.results;
          resultFantasy.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultFantasy,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showCrimeTV() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
        API_KEY +
        "&with_genres=80"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultCrime = data;
          const slider = 10;
          const sliders = document.getElementById("CrimeTV");
          resultCrime = resultCrime.results;
          resultCrime.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultCrime,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showThriller() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&with_genres=53"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultThriller = data;
          const slider = 11;
          const sliders = document.getElementById("Thriller");
          resultThriller = resultThriller.results;
          resultThriller.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultThriller,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showDramaTV() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
        API_KEY +
        "&with_genres=18"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultDramaTv = data;
          const slider = 12;
          const sliders = document.getElementById("DramaTV");
          resultDramaTv = resultDramaTv.results;
          resultDramaTv.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultDramaTv,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    showRealityTV() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
        API_KEY +
        "&with_genres=10764"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          resultReality = data;
          const slider = 13;
          const sliders = document.getElementById("Reality");
          resultReality = resultReality.results;
          resultReality.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<div class="imagecont">
              <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>
              <button class="listadd" id="${index}${slider}" onclick="addtolist(resultReality,${index},${slider})">add to list</button>
              </div>`
            );
          });
        });
    },
    sliderScrollLeft(genre) {
      let sliders = document.getElementById(genre);
      sliders.scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });
      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },
    sliderScrollRight(genre) {
      const sliders = document.getElementById(genre);
      if (this.scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
          top: 0,
          left: (this.scrollAmount += this.scrollPerClick),
          behavior: "smooth",
        });
      }
    },
  },

  created() {
    this.showUpcoming();
    this.showLatest();
    this.showComedy();
    this.showLatestTV();
    this.showKids();
    this.showHorror();
    this.showDocumentary();
    this.showMusical();
    this.showFantasy();
    this.showCrimeTV();
    this.showThriller();
    this.showDramaTV();
    this.showRealityTV();
  },
});
