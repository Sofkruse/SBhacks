import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Systrace } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import MainScreen from './MainScreen'
import PostComponent from './PostComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostComponent} />
    </Stack.Navigator>
  );
};


