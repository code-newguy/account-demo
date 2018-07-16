import axios from 'axios'
const api = process.env.REACT_APP_RECORDS_API_URL || 'http://localhost:5000'


export const getAll = ()=> 
    axios.get(`${api}/records`)

export const create = (body) => {
    return axios.post(`${api}/records`, body)
}