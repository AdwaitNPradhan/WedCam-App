import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Row from '../components/Wrappers/Row';
import About from '../screens/About';
import ActiveEvent from '../screens/ActiveEvent';
import Camera from '../screens/Camera';
import Development from '../screens/Development';
import Events from '../screens/Events';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Header from './Header';
import Typography from '../components/Customs/Typography';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        header: Header,
        drawerType: 'back',
        drawerItemStyle: {},
        drawerActiveTintColor: 'black',
      }}
      drawerContent={props => <Row><Typography>{props.state.}</Typography></Row>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="ActionSheets" component={Home} />
      <Drawer.Screen name="SettingsStack" component={SettingsNavigator} />
      <Drawer.Screen name="Development" component={Development} />
    </Drawer.Navigator>
  );
}
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen options={{}} name="Home" component={Home} />
      <Stack.Screen options={{}} name="ActiveEvent" component={ActiveEvent} />
      <Stack.Screen options={{}} name="Events" component={Events} />
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
