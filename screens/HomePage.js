import React, { useState, useRef } from "react";
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
} from "react-native";
import * as Haptics from "expo-haptics";

function HomePage(props) {
  const [isClicked, setIsClicked] = useState(false);

  const springValue = useRef(new Animated.Value(1)).current;
  const shadowOffsetValue = useRef(new Animated.Value(0)).current;
  const textOpacityValue = useRef(new Animated.Value(1)).current;
  const textOpacityValue2 = useRef(new Animated.Value(1)).current;

  const handleClick = () => {
    setIsClicked(!isClicked);

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    Animated.spring(springValue, {
      toValue: isClicked ? 1 : 1.2,
      stiffness: 300,
      damping: 8,
      delay: isClicked ? 0 : 300,
      useNativeDriver: false,
    }).start();

    Animated.spring(shadowOffsetValue, {
      toValue: isClicked ? 0 : 15,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(textOpacityValue, {
      toValue: isClicked ? 1 : 0,
      duration: 300,
      delay: isClicked ? 300 : 0,
      useNativeDriver: false,
    }).start();

    Animated.timing(textOpacityValue2, {
      toValue: isClicked ? 0 : 1,
      duration: 200,
      delay: isClicked ? 0 : 300,
      useNativeDriver: false,
    }).start();
  };

  const handleClickOut = () => {
    setIsClicked(!isClicked);
    Vibration.cancel();
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

  const textOpacity = {
    opacity: textOpacityValue,
  };

  const textOpacity2 = {
    opacity: textOpacityValue2,
  };

  return (
    <LinearGradient
      colors={["#54EA90", "#8454EA"]}
      start={{ x: -0.5, y: -0.8 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.roundButton2} onPressIn={handleClick}>
          <TouchableOpacity style={styles.roundButton} onPressIn={handleClick} activeOpacity={1}>
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
            <Animated.Text
              style={[
                styles.subText,
                {
                  transform: [{ scale: springValue }],
                  ...textOpacity,
                },
              ]}
            >
              oomie
            </Animated.Text>
            <Animated.Text
              style={[
                styles.subText2,
                {
                  transform: [{ scale: springValue }],
                  ...textOpacity2,
                },
              ]}
            >
              oulette
            </Animated.Text>
          </TouchableOpacity>
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
  roundButton2: {
    width: 370,
    height: 370,
    backgroundColor: "black",
    borderRadius: 185,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 200,
    fontFamily: "Molot",
    width: 200,
  },

  subText: {
    fontSize: 30,
    fontFamily: "Molot",
    marginTop: -40,
  },

  subText2: {
    color: "white",
    fontSize: 30,
    fontFamily: "Molot",
    marginTop: 0,
  },
});

export default HomePage;
