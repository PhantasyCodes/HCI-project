import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import {BASE_URL} from "@env"
import * as Device from "expo-device";
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSignUp = () => {
    fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        devicename: Device.modelName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        AsyncStorage.setItem("token", data.token);
        AsyncStorage.setItem("user", JSON.stringify(data.user));

        navigation.navigate("Home");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <LinearGradient
        colors={["#54EA90", "#8454EA"]} // Specify the colors you want to use
        start={{ x: -0.5, y: -0.8 }} // Start from the top left corner
        end={{ x: 1, y: 1 }} // End at the bottom right corner
        style={{ flex: 1 }} // Make sure the gradient fills the entire screen
      >
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Landing")}
            >
              <Icon name="x" size={34} color="black" />
            </TouchableOpacity>
            <View>
              <Text style={styles.landingText}>ROOMIE ROULETTE</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType="default"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={[styles.buttonText, { color: "white" }]} onPress={handleSignUp}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  landingText: {
    fontSize: 70,
    fontFamily: "Molot",
    marginLeft: 20,
    lineHeight: 70,
    marginBottom: 20,
  },

  input: {
    width: "80%",
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "black",
    marginLeft: 20,
    backgroundColor: "#D9D9D9",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "black",
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    fontFamily: "Metropolis-SemiBold",
    fontSize: 20,
  },

  backButton: {
    position: "absolute",
    top: "5%",
    right: 16,
    padding: 8,
  },
});

export default LoginPage;
