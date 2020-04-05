import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/message";

export function getMsgs() {
  return http.get(apiEndPoint);
}

export function saveMsgs(message) {
  if (message._id) {
    const body = { ...message };
    delete body._id;
    return http.put(apiEndPoint + "/" + message._id, body);
  }
  return http.post(apiEndPoint, message);
}
