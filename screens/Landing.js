import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

function Landing({ navigation }) {
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
        <Text style={styles.landingText}>ROOMIE ROULETTE</Text>
        <Text style={styles.welcome}>
          Welcome to Roomie Roulette. You can start here
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("Home")}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
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

  welcome: {
    fontSize: 22,
    marginLeft: 20,
    fontFamily: "Metropolis-SemiBold",
    color: "#fff",
    maxWidth: "80%",
  },

  button: {
    backgroundColor: "black",
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  button2: {
    backgroundColor: "#54EA90",
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 10,
  },

  buttonText: {
    fontFamily: "Metropolis-SemiBold",
    fontSize: 20,
  },
});

export default Landing;
