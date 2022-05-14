import axios from 'axios';
import {AUTHORIZATION} from './auth';

export const Api = axios.create(
  {
    baseURL: 'https://tiao.supliu.com.br/api',
    headers: {
      'Content-type': 'application/json',
      Authorization: AUTHORIZATION,
    },   
  },
);