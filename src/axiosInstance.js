import axios from 'axios';

// const url = "https://cors-anywhere.herokuapp.com/"; -- może być potrzebne
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1500
});
export default instance;