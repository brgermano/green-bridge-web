import axios from 'axios';

export function getBalance() {
  return axios
    .get('http://localhost:3002/user')
    //.get(`http://localhost:3001/user?id=${id}`)
    .then(response => response.data)
    .catch((e) => console.warn('getBalance error: ', e))
}

export function getProjects() {
  return axios
    .get('http://localhost:3003/projects')
    .then(response => response.data)
    .catch((e) => console.warn('getProjects error: ', e))
}
