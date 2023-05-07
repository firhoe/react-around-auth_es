import {token, groupId, adress} from './config';

class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    return res.json();
  }

  _makeRequest(method, url, body) {
    return fetch(url, {
      method: method,
      headers: this._headers,
      body: body ? JSON.stringify(body) : undefined,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  getCardList() {
    return this._makeRequest('GET', `${this._baseUrl}/cards`);
  }

  getUserInfo() {
    return this._makeRequest('GET', `${this._baseUrl}/users/me`);
  }

  setUserInfo({name, about}) {
    return this._makeRequest('PATCH', `${this._baseUrl}/users/me`, {
      name,
      about,
    });
  }

  addCard({name, link}) {
    return this._makeRequest('POST', `${this._baseUrl}/cards`, {name, link});
  }

  removeCard(cardId) {
    return this._makeRequest('DELETE', `${this._baseUrl}/cards/${cardId}`);
  }

  setUserAvatar(avatar) {
    return this._makeRequest('PATCH', `${this._baseUrl}/users/me/avatar`, {
      avatar,
    });
  }

  changeLikeCardStatus(cardId, liked){
    return liked ? this.addLike(cardId) : this.removeLike(cardId);
  }

  addLike(cardId) {
    return this._makeRequest('PUT', `${this._baseUrl}/cards/likes/${cardId}`);
  }

  removeLike(cardId) {
    return this._makeRequest(
      'DELETE',
      `${this._baseUrl}/cards/likes/${cardId}`
    );
  }
}

const api = new Api({
  baseUrl: adress,
  headers: {
    authorization: token,
    'Content-Type': 'application/json',
  },
  groupId: groupId,
});

export default api;
