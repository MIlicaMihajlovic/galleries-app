import axios from 'axios'

export default new axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        Accept: 'application/json'
    }
})