import APIClient, {AuthAPIClient, Response} from './axios.config';
import {URLs} from './urls';

// const d = {
//   data: {
//     token:
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhNzRjZTliLTBmNWYtNDNjYy1iZGFiLWRlYjQ1MDJjODVmNiIsImlhdCI6MTcwNjQ3NDAwNywiZXhwIjoxNzA2NTYwNDA3LCJpc3MiOiJ3ZWRjYW0ifQ.yPz7oxqpq3d1ms1yS5XoJIP793IFmXIuc8j4MwAhIic',
//     user: {
//       created_at: '2024-01-28T14:51:12.691Z',
//       deleted_at: null,
//       email: 'adwaitpradhan2001@gmail.com',
//       firstName: null,
//       id: '64feee7c-addb-42e2-ac06-8316242a22d6',
//       lastName: null,
//       updated_at: '2024-01-28T14:51:12.691Z',
//       userType: 'user',
//     },
//   },
//   message: '',
//   statusCode: 201,
// };

export interface User {
  created_at: string;
  deleted_at: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  updated_at: string;
  userType: string;
}

export const doLogin = async (
  email: string,
): Promise<Response<{token: string; user: User} | undefined>> => {
  const response = await APIClient.post(URLs.login, {
    email,
  });
  return response.data;
};

export const getProfile = async (): Promise<Response<User | undefined>> => {
  const response = await AuthAPIClient.get(URLs.profile);
  return response.data;
};
