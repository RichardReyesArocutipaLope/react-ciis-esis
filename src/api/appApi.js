import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { url_base_api } = getEnvVariables();

const appApi = axios.create({
  baseURL: url_base_api,
});

// Todo: configurar interceptores
appApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem('Token'),
  };

  return config;
});

export default appApi;
