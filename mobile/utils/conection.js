import Axios from 'axios';
import {BASE_URL_API} from './constant';

export const axios = Axios.create({
  baseURL: BASE_URL_API,
});
