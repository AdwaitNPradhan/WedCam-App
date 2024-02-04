import {AxiosError} from 'axios';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {User, doLogin, getProfile} from '../api/auth';
import APIClient, {AuthAPIClient} from '../api/axios.config';
import {setIsLoggedIn, setToken, setUser} from '../store/appSlice';
import useEncStore from './useEncStore';

const useAuthAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {SetItem} = useEncStore();

  const SaveToken = (token: string) => SetItem('wedcam-token', token);

  const Login = async (email: string) => {
    try {
      setIsLoading(true);
      const response = await doLogin(email);
      if (response.data?.token) {
        __DEV__ && console.log('Token', response.data.token);
        APIClient.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
        AuthAPIClient.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
        dispatch(setToken({token: response.data.token}));
        dispatch(setUser({user: response.data.user}));
        dispatch(setIsLoggedIn({isLoggedIn: true}));
        await SaveToken(response.data.token);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const GetProfile = async (): Promise<User | undefined> => {
    try {
      setIsLoading(true);
      const response = await getProfile();
      if (response.data) {
        dispatch(setUser({user: response.data}));
        dispatch(setIsLoggedIn({isLoggedIn: true}));
      }
      return response.data;
    } catch (e) {
      console.error(e as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading, Login, GetProfile};
};

export default useAuthAPI;
