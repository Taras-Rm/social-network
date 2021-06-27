import axios from 'axios';

// axios instance
const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'e2dd59c9-366a-4705-bbf0-f5a55b8408d5'}
});

// object with api
export const dataAPI = {
  // отримати сторінку користувачів
  getUsers(pageNumber, usersCount) {
    return instance.get(`users?page=${pageNumber}&count=${usersCount}`).then((response) => {
      return response.data;
    });
  },

  // отримати сторінку з користувачами
  getUsersPage(pageNumber, usersCount) {
    return instance.get(`users?page=${pageNumber}&count=${usersCount}`).then((response) => {
      return response.data;
    });
  },

  // отримати інформацію про користувача
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  // стежити за користувачем
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  // нестежити за користувачем
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  // отримати статус користувача
  getUserStatus(userID) {
    return instance.get(`profile/status/${userID}`).then((response) => {
      return response.data;
    });
  },

  // оновити статус користувача
  updateUserStatus(status) {
    return instance
      .put(`profile/status`, {
        status: status,
      })
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  // перевірка на авторизованість
  auth() {
    return instance.get(`/auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};
