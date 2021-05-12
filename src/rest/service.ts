import axios from 'axios'
import { REST_API_URL } from '../config'

type Params = {
  [key: string]: string | string[]
}

export const getRestApi = <T, P = Params>(
  urlPath: String,
  params?: P
): Promise<T> => {
  const url = `${REST_API_URL}${urlPath}`
  return axios.get(url, { params })
}