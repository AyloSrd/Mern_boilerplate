import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/api/items")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getStudentsLesson(id) {
    return service
      .get(`/api/lessons/all/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getTeachersLessons() {
    return service
      .get("/api/lessons")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneLesson(id) {
    return service
      .get(`/api/lessons/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  saveLesson(lesson) {
    return service
      .post(`/api/lessons/`, lesson)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteLesson(id) {
    console.log(id)
    return service  
      .delete(`/api/lessons/${id}`)
      .then(res => res.data)
      .catch(errorHandler)
  },

  getAll(endPoint) {
    return service.get(endPoint);
  },

  create(endPoint, data) {
    return service.post(endPoint, data);
  },

  getUser() {
    return service.get("/api/users/profile");
  },

  getOne(endPoint, id) {
    return service.get(endPoint + id);
  },

  updateOne(endPoint, data) {
    return service.patch(endPoint, data);
  },
};
