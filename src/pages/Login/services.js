import axios from 'axios';

export default function getLogin({ user, pass }) {
  return axios
    .get('http://localhost:3001/login')
    //.get(`http://localhost:3001/login?user=${user}&password=${pass}`)
    .then(response => response.status)
    .catch((e) => console.warn('getLogin error: ', e))
}