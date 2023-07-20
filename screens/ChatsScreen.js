import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HamburgerMenu from "./components/HamburgerMenu";
import Back from "../assets/back.svg";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const messages = [
  {
    id: "1",
    users: {
      id: "1",
      name: "Njoki",
      image: require("../assets/profile.png"),
    },
    lastMessage: {
      id: "1",
      content: "Hey, how are you?",
    },
  },
  {
    id: "2",
    users: {
      id: "2",
      name: "John",
      image: require("../assets/profile2.png"),
    },
    lastMessage: {
      id: "2",
      content: "How much rent do you pay?",
    },
  },
  {
    id: "3",
    users: {
      id: "3",
      name: "Jane",
      image: require("../assets/profile3.png"),
    },
    lastMessage: {
      id: "3",
      content: "I'm looking for a roommate",
    },
  },
  {
    id: "4",
    users: {
      id: "4",
      name: "Max",
      image: require("../assets/profile4.png"),
    },
    lastMessage: {
      id: "4",
      content: "I'm looking for a roommate",
    },
  },
];

const ChatsScreen = () => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Back width={30} height={30} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Messages</Text>
          </View>
        </View>
        <TextInput placeholder="Search messages" style={styles.input} />
        <View style={styles.chatsContainer}>
          {messages.map((message) => (
            <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate("Chat")}>
              <Image source={message.users.image} style={styles.chatImage} />
              <View style={styles.chatTextContainer}>
                <Text style={styles.chatName}>{message.users.name}</Text>
                <Text style={styles.chatText}>
                  {message.lastMessage.content}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ChatsScreen;

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
  header: {
    flexDirection: "row",
    // backgroundColor: "#8454EA",
    height: 100,
    alignItems: "flex-end",
    marginTop: -250,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingRight: 160,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    fontFamily: "Molot",
    fontSize: 20,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "lightgrey",
  },
  chatsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  chatImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontFamily: "Molot",
    fontSize: 18,
    marginBottom: 5,
  },
  chatText: {
    color: "grey",
    fontSize: 16,
  },
});
