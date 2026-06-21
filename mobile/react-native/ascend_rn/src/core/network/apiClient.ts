import axios from 'axios';

import { ApiConstants } from './apiConstants';

export const apiClient = axios.create({
  baseURL: ApiConstants.baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});