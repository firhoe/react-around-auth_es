export const API_BASE_URL = 'https://register.nomoreparties.co';

export const registerUser = (password, email) => {
  return fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({password, email}),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const loginUser = (password, email) => {
  return fetch(`${API_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({password, email}),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};

export const checkToken = (token) => {
  return fetch(`${API_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
