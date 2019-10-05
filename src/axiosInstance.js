import axios from 'axios';

// const url = "https://cors-anywhere.herokuapp.com/"; -- może być potrzebne
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1500
});
export default instance;