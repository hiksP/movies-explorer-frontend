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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then((res) => this._getResponseData(res))
  }

  signOut(jwt) {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "cookie": jwt
      },
    }).then((res) => this._getResponseData(res))
  }

  getMe(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "cookie": jwt
      }
    }).then((res) => this._getResponseData(res));
  }

}

export const mainApi = new MainApi({
  baseUrl: 'https://api.movies4all.nomoredomains.xyz'
})