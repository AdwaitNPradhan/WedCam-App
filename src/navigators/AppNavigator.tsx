import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import About from '../screens/About';
import ActiveEvent from '../screens/ActiveEvent';
import Development from '../screens/Development';
import Home from '../screens/Home';
import PastEvents from '../screens/PastEvents';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: Fonts.QuickSand.semiBold,
        },
      }}>
      <Tab.Screen name="HomeStack" component={HomeNavigator} />
      <Tab.Screen name="EventsStack" component={EventsNavigator} />
      <Tab.Screen name="SettingsStack" component={SettingsNavigator} />
    </Tab.Navigator>
  );
}
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen options={{}} name="Home" component={Home} />
      <Stack.Screen options={{}} name="ActiveEvent" component={ActiveEvent} />
    </Stack.Navigator>
  );
};
const EventsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Events"
      screenOptions={{headerShown: false}}>
      <Stack.Screen options={{}} name="Events" component={PastEvents} />
    </Stack.Navigator>
  );
};
const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Development" component={Development} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
