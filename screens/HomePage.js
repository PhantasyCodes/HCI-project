import React, { useState, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Vibration,
  Image,
} from "react-native";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BASE_URL} from "@env"

function HomePage(props) {

  const [user, setUser] = useState(null);

  const validateToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await fetch(`${BASE_URL}/api/validate`, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => {setUser(JSON.parse(data))})
    .catch((err) => console.log(err))

    const checkTokenValidity = async () => {
      const tokenValid = await validateToken();

      if (!tokenValid) {
        props.navigation.navigate("Login");
      }
    }
  }, [])

  const [fontsLoaded] = useFonts({
    Molot: require("../assets/fonts/Molot.otf"),
    "Metropolis-Regular": require("../assets/fonts/Metropolis-Regular.otf"),
    "Metropolis-SemiBold": require("../assets/fonts/Metropolis-SemiBold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      colors={["#54EA90", "#8454EA"]}
      start={{ x: -0.5, y: -0.8 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <Text>{user ? user.email : "User"}</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    resizeMode: "contain",
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    position: "absolute",
    top: -35,
    left: 10,
  }
})

export default HomePage;
