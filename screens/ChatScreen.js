import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, FlatList, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import dayjs from "dayjs";
import messages from "../assets/data/messages.json";
import relativeTime from "dayjs/plugin/relativeTime";
import { Ionicons } from "@expo/vector-icons";
import Back from "../assets/back.svg";


dayjs.extend(relativeTime);

const Message = ({ message }) => {

    const isMyMessage = () => {
      return message.user.id === "1";
    };
    return (
      <View
        style={[
          styles.messageContainer,
          {
            backgroundColor: isMyMessage() ? "#8454EA" : "#2DD36F",
            alignSelf: isMyMessage() ? "flex-end" : "flex-start",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: isMyMessage() ? "white" : "black",
            },
          ]}
        >
          {message.text}
        </Text>
        <Text
          style={
            styles.time
          }
        >
          {dayjs(message.createdAt).fromNow(true)}
        </Text>
      </View>
    );
  };

  const InputBox = () => {
    const [message, setMessage] = React.useState("");
    const onSend = () => {};
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message"
          style={[styles.input, {
          }]}
          onChange={setMessage}
        />
        <Ionicons
          onPress={onSend}
          style={styles.send}
          name="send"
          size={20}
          color="white"
        />
      </View>
    );
  };

const ChatScreen = () => {
  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <Back width={30} height={30} />
            </TouchableOpacity>
            <View>

            <Text style={styles.headerText}>Njoki</Text>
            </View>
          </View>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            style={styles.list}
            inverted
          />
          <InputBox />
        </SafeAreaView>
      </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImage: {
    resizeMode: "contain",
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    position: "absolute",
    top: -35,
    left: 10,
  },
  list: {
    padding: 10,
  },
  messageContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "75%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  text: {
    fontFamily: "Metropolis-Regular",
  },
  time: {
    fontFamily: "Metropolis-Regular",
    alignSelf: "flex-end",
    color: "grey",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: "lightgrey",
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    fontFamily: "Metropolis-Regular",
    fontSize: 16,
  },
  send: {
    backgroundColor: "#8454EA",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    // backgroundColor: "#8454EA",
    height: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingRight: 185,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    fontFamily: "Metropolis-Bold",
    fontSize: 20,
  },
});
