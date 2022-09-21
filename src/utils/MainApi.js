class MainApi {
  constructor({baseUrl}) {
      this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
      if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`)
      }
      return res.json();
  }

  signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password})
    }).then((res) => this._getResponseData(res))
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Access-Control-Expose-Headers": "Set-Cookie",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password})
    }).then((res) => this._getResponseData(res))
  }

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => {
      if(!res.ok) {
        return Promise.reject(`Ошибка ${res.status}`)
      } else return res;
    })
  }

  patchUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email})
    }).then((res) => this._getResponseData(res));
  }

  getMe() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Access-Control-Expose-Headers": "Set-Cookie",
        "Content-Type": "application/json"
      },
      credentials: 'include',
    })
      .then((res) => this._getResponseData(res));
  };

  saveMoive(country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail || image,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN
      })
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => this._getResponseData(res));
  }


}

export const mainApi = new MainApi({
  baseUrl: 'https://api.movies4all.nomoredomains.xyz'
})