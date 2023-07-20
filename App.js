import { Text, View, Button, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./screens/Landing";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import ChatScreen from "./screens/ChatScreen";
import ChatsScreen from "./screens/ChatsScreen";
import { StatusBar } from "expo-status-bar";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
