import Axios from 'axios'

export const baseURL = 'http://localhost:1338'

export const api = Axios.create({
  baseURL: `${baseURL}/api/`,
  timeout: 1000
})