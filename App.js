import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Molot: require("./assets/fonts/Molot.otf"),
    "Metropolis-Regular": require("./assets/fonts/Metropolis-Regular.otf"),
    "Metropolis-SemiBold": require("./assets/fonts/Metropolis-SemiBold.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.landingText}>ROOMIE ROULETTE</Text>
      <Text style={styles.welcome}>
        Welcome to Roomie Roulette. You can start here
      </Text>
      <View style={{ flexDirection: "row" }}>
        
      </View>
    </SafeAreaView>
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

  welcome: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: "Metropolis-SemiBold",
    color: "#fff",
    maxWidth: "75%",
  },
});
