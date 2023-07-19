import React, { useState, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Vibration,
  Image,
  View
} from "react-native";
import * as Haptics from "expo-haptics";
import MatchButton from "./components/MatchButton";
import MyCarousel from "./components/MyCarousel";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function HomePage(props) {
  const slideAnim = useRef(new Animated.Value(1000)).current;

  // useEffect(() => {
  //   Animated.timing(slideAnim, {
  //     toValue: 120,
  //     duration: 1800,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);

  const slideCard = () => {
    Animated.timing(slideAnim, {
      toValue: 120,
      duration: 1800,
      useNativeDriver: true,
    }).start();
  };

  const slideBack = () => {
    Animated.timing(slideAnim, {
      toValue: 1000,
      duration: 1800,
      useNativeDriver: true,
    }).start();
  };


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
        <Image source={require("../assets/logo.png")} style={styles.logoImage} />
        <MatchButton slideCard={slideCard}/>
        {/* <MyCarousel /> */}
        <Animated.View
          style={{ ...styles.safeArea, transform: [{ translateY: slideAnim }] }}
          >
          <MyCarousel />
        </Animated.View>
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
  logoImage: {
    resizeMode: "contain",
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    position: "absolute",
    top: -35,
    left: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
    marginBottom: 40,
  },
  seeMoreButton: {
    backgroundColor: "#8454EA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#54EA90",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 60,
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 7,
  },
  titleRoomie: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#8454EA",
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  titleRoulette: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 5,
  },
  safeArea: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    overflow: "hidden",
  },
  whiteContainer: {
    flex: 1,
    padding: 20,
  },
  line: {
    height: 8,
    backgroundColor: "#000",
    borderRadius: 4,
    marginBottom: 10,
    maxWidth: 130,
    marginLeft: 120,
  },
  image: {
    // flex: 1,
    width: "100%",
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 0,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default HomePage;
