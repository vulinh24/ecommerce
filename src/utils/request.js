import axios from "axios";

const request = axios.create(
    {
        baseURL: 'https://fakestoreapi.com',
        headers: {'Content-Type' : 'application/json'}
    }
)

export default request;