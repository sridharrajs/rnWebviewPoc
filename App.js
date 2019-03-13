import { createStackNavigator, createAppContainer } from 'react-navigation';
import WebViewScreen from './WebViewScreen'
import Home from './Home';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  WebViewScreen: { screen: WebViewScreen },
});

let App = createAppContainer(MainNavigator);

export default App;
