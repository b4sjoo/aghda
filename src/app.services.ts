import axios from 'axios'

const apiHTTPClient = axios.create({
    baseURL: "https://api.aghda.net/",
});

export { apiHTTPClient };