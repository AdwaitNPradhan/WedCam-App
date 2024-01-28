import EncryptedStorage from 'react-native-encrypted-storage';
const useEncStore = () => {
  const GetItem = async (key: string) => {
    return await EncryptedStorage.getItem(key);
  };

  const SetItem = async (key: string, value: string) => {
    try {
      return await EncryptedStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const RemoveItem = async (key: string) => {
    try {
      return await EncryptedStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  const Clear = async () => {
    try {
      return await EncryptedStorage.clear();
    } catch (e) {
      console.log(e);
    }
  };

  return {GetItem, SetItem, RemoveItem, Clear};
};

export default useEncStore;
