import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import RIcon from "../../assets/R.svg";

const MatchButton = (props) => {
  const [isRecording, setIsRecording] = useState(false);
  const outerCircleScale = useRef(new Animated.Value(1)).current;
  const middleCircleScale = useRef(new Animated.Value(1)).current;
  const innerCircleScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isRecording) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [isRecording]);

  const startAnimation = () => {
    Animated.parallel([
      Animated.loop(
        Animated.sequence([
          Animated.timing(outerCircleScale, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
          }),
          //   Animated.timing(outerCircleScale, {
          //     toValue: 1.3,
          //     duration: 450,
          //     useNativeDriver: true,
          //   }),
          Animated.timing(outerCircleScale, {
            toValue: 1.4,
            duration: 450,
            useNativeDriver: true,
          }),
          Animated.timing(outerCircleScale, {
            toValue: 0.8,
            duration: 450,
            useNativeDriver: true,
          }),
          Animated.timing(outerCircleScale, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
          }),
        ]),
        {
          iterations: 3,
        }
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(middleCircleScale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(middleCircleScale, {
            toValue: 1.3,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(middleCircleScale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        {
          iterations: 3,
        }
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(innerCircleScale, {
            toValue: 0.8,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(innerCircleScale, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(innerCircleScale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        {
          iterations: 3,
        }
      ),
    ]).start();
  };

  const resetAnimation = () => {
    Animated.parallel([
      Animated.timing(outerCircleScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(middleCircleScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(innerCircleScale, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const buttonStyle = {
    transform: [{ scale: innerCircleScale }],
  };

  const outerCircleStyle = {
    transform: [{ scale: outerCircleScale }],
  };

  const middleCircleStyle = {
    transform: [{ scale: middleCircleScale }],
  };

  return (
    <TouchableOpacity
      //   onPress={() => setIsRecording(!isRecording)}
      onPress={() => {
        startAnimation();
        props.slideCard();
      }}
      style={styles.container}
    >
      <Animated.View
        style={[styles.outerCircle, outerCircleStyle]}
      ></Animated.View>
      <Animated.View
        style={[styles.middleCircle, middleCircleStyle]}
      ></Animated.View>
      <Animated.View style={[styles.innerCircle, buttonStyle]}>
        <RIcon width={100} height={100} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  outerCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    position: "absolute",
    backgroundColor: "rgba(132, 84, 234, 0.3)",
  },
  middleCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    position: "absolute",
    backgroundColor: "rgba(132, 84, 234, 0.6)",
  },
  innerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(132, 84, 234, 1)",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MatchButton;
