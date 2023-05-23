import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, Animated } from "react-native";

function HomePage(props) {
  const [isClicked, setIsClicked] = useState(false);

  const springValue = useRef(new Animated.Value(1)).current;
  const shadowOffsetValue = useRef(new Animated.Value(0)).current;

  const handleClick = () => {
    setIsClicked(!isClicked);

    Animated.spring(springValue, {
      toValue: isClicked ? 1 : 1.2,
      stiffness: 200,
      damping: 8,
      useNativeDriver: false,
    }).start();

    Animated.spring(shadowOffsetValue, {
      toValue: isClicked ? 0 : 15,
      duration: 300,
      useNativeDriver: false,
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

  const textShadowStyle = {
    textShadowColor: "#fff",
    textShadowOffset: { width: shadowOffsetValue, height: shadowOffsetValue },
    textShadowRadius: 0,
  };

  return (
    <LinearGradient
      colors={["#54EA90", "#8454EA"]}
      start={{ x: -0.5, y: -0.8 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.roundButton} onPress={handleClick}>
          <Animated.Text
            style={[
              styles.text,
              {
                transform: [{ scale: springValue }],
                ...textShadowStyle,
              },
            ]}
          >
            R
          </Animated.Text>
          <Text style={styles.subText}>oomie</Text>
        </TouchableOpacity>
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
    width: "45%",
  },

  subText: {
    fontSize: 30,
    fontFamily: "Molot",
  },
});

export default HomePage;
