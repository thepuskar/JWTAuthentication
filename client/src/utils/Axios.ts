import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL
}

export const Axios: AxiosInstance = axios.create(config)
