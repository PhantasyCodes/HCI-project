import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {};

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Landing")}
        >
          <Icon name="x" size={24} color="black" />
        </TouchableOpacity>
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
            <Text style={[styles.buttonText, { color: "white" }]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8454EA",
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
