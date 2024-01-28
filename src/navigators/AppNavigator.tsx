import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Development from '../screens/Development';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Development" component={Development} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
