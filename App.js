import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./screens/Landing";
import LoginPage from "./screens/LoginPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen  name="Login" component={LoginPage}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}