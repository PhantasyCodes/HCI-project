import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerMenu from "./components/HamburgerMenu";
import { Ionicons } from "@expo/vector-icons";
import Back from "../assets/back.svg";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImage}
        />
        <TouchableOpacity
          style={{
            marginTop: 58,
            marginRight: -60,
          }}
          onPress={() => props.navigation.navigate("ChatsScreen")}
        >
          <Ionicons name="chatbubbles" size={30} color="#000" />
        </TouchableOpacity>

        <HamburgerMenu />
      </View>
      <View style={styles.whiteContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              marginTop: -18,
              marginRight: 20,
            }}
          >
            <Back width={30} height={30} />
          </TouchableOpacity>
          <Image
            source={require("../assets/image_1.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>JANE</Text>
            <Text style={styles.profileAge}>Age: 19</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.studyText}>Studies at: Strathmore University</Text>
        <Text style={styles.matchedText}>Matched: July 2023</Text>
        <Text style={styles.aboutText}>ABOUT</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolormiat csom sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <TouchableOpacity style={styles.gallery}>
          <Ionicons name="images-outline" size={30} color="#000" />
          <Text style={styles.galleryText}>View Njoki's Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.matchButton}>
          <Text style={styles.matchText}>Match</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    width: "100%",
    // backgroundColor: "#fff",
    height: 100,
  },
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
    marginTop: -30,
    marginLeft: 15,
  },
  whiteContainer: {
    flex: 1,
    padding: 20,
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginLeft: 0,
    marginTop: 40,
  },

  profileText: {
    marginLeft: 10,
  },

  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 30,
    fontFamily: "Molot",
  },

  profileAge: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 30,
    fontFamily: "Metropolis-SemiBold",
  },

  line: {
    height: 1,
    backgroundColor: "#000",
    marginTop: 30,
  },
  studyText: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: "Metropolis-SemiBold",
  },
  matchedText: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: "Metropolis-SemiBold",
  },

  aboutText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    fontFamily: "Molot",
  },

  descriptionText: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "Metropolis-Regular",
  },

  gallery: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },

  galleryText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Metropolis-SemiBold",
  },
  matchButton: {
    backgroundColor: "#8454EA",
    borderRadius: 5,
    marginTop: 20,
    // marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
  matchText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Molot",
  },
});
