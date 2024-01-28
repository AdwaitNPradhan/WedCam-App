import axios from 'axios';
import {HOSTs} from './hosts';

export interface Response<T> {
  data: T;
  message: string;
  statusCode: number;
}

const APIClient = axios.create({
  baseURL: HOSTs.local,
  headers: {'Content-Type': 'application/json', 'Accept-Encoding': 'gzip'},
});

const AuthAPIClient = axios.create({
  baseURL: HOSTs.local,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
  },
});

export {AuthAPIClient};
export default APIClient;
