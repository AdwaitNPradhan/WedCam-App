import axios from 'axios';
import {HOSTs} from './hosts';

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
