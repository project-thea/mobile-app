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

//Define/configure screens
const AppNavigator = createStackNavigator({
  Home: {
	  screen: HomeScreen
  },
  Settings: {
	  screen: SettingsScreen
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
