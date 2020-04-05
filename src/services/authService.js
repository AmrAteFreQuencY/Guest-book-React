import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

async function login(username, password) {
  const { data: jwt } = await http.post(apiEndPoint, { username, password });
}

function loginwithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginwithJwt,
  logout,
  getCurrentUser,
  getJwt
};
