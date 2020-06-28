/**
 * 
 */
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { store, persistor } from './store';
import HomeScreen from './src/HomeScreen';
import SettingsScreen from './src/SettingsScreen';
import AboutScreen from './src/AboutScreen';
import PreventionScreen from './src/PreventionScreen';
import ServerSettingsScreen from './src/ServerSettingsScreen';

//Define/configure screens
const AppNavigator = createStackNavigator({
  Home: {
	  screen: HomeScreen
  },
  Settings: {
	  screen: SettingsScreen
  },
  About: {
	  screen: AboutScreen
  },
  Prevention: {
	  screen: PreventionScreen
  },
  ServerSettings: {
	  screen: ServerSettingsScreen
  }  
},
{
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  
  render() {
    return (
	<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
		<AppContainer />
      </PersistGate>
    </Provider>
	);
  }
}
