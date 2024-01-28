import {useState} from 'react';

const useAuthAPI = () => {
  const [isLoading, setIsloading] = useState(false);

  const Login = async (email: string) => {};

  return {isLoading};
};

export default useAuthAPI;
