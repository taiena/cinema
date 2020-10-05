import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "http://localhost:4000/",
  // headers: {
  //   "API-KEY": "",
  // },
});

export const filmsAPI = {
  getFilms() {
    return instance.get(`films/`).then((response) => {
      return response.data;
    });
  },
};

export const filmsGenreAPI = {
  getFilmsGenre(genreUrl) {
    return instance.get(`films?genre=` + genreUrl).then((response) => {
      return response.data;
    });
  },
};

export const actorsAPI = {
  getActors(currentPage = 1) {
    return instance.get(`actors?page=${currentPage}`).then((response) => {
      return response.data;
    });
  },
};

export const filmAPI = {
  getFilm(filmId) {
    return instance.get("films/" + filmId).then((response) => {
      return response.data;
    });
  },
};

export const actorAPI = {
  getActor(actorId) {
    return instance.get("actors/" + actorId).then((response) => {
      return response.data;
    });
  },
};

export const genresAPI = {
  getGenres() {
    return instance.get(`genres`).then((response) => {
      return response.data;
    });
  },
};
