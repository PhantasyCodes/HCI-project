import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";

function HomePage(props) {
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
      colors={["#54EA90", "#8454EA"]} // Specify the colors you want to use
      start={{ x: -0.5, y: -0.8 }} // Start from the top left corner
      end={{ x: 1, y: 1 }} // End at the bottom right corner
      style={{ flex: 1 }} // Make sure the gradient fills the entire screen
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.text}>R</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

  roundButton: {
    width: 350,
    height: 350,
    backgroundColor: "#8454EA",
    borderRadius: 175,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 200,
    fontFamily: "Molot",
    shadowColor: "#fff",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
export default HomePage;
