import {User} from './auth';
import {AuthAPIClient, Response} from './axios.config';
import {URLs} from './urls';

export interface UserDetailsUpdateDTO {
  firstName: string;
  lastName: string;
}

export const updateProfile = async (
  profile: UserDetailsUpdateDTO,
): Promise<Response<User>> => {
  const response = await AuthAPIClient.patch(URLs.updateProfile, profile);
  return response.data;
};
