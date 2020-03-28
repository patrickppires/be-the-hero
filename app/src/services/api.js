import axios from 'axios'

const api = axios.create({ baseURL: 'https://be-hero-api.herokuapp.com/' })

export default api