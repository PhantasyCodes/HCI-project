import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const MyCarousel = () => {
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const data = [
    { id: 1, title: "Slide 1" },
    { id: 2, title: "Slide 2" },
    { id: 3, title: "Slide 3" },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.whiteContainer}>
        <View style={styles.line} />
        <Image
          source={require("../../assets/image_1.png")}
          style={styles.image}
        />
        <Text style={styles.title}>NJOKI 20</Text>
        <View style={styles.iconContainer}>
          <Icon name="school-outline" size={24} color="#000" />
          <Text style={styles.iconText}>Strathmore University</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="business-outline" size={24} color="#000" />
          <Text style={styles.iconText}>Looking for a roommate</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate("Chat")}>
            <Text style={styles.buttonText}>SEE MORE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextSlide}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleNextSlide = () => {
    carouselRef.current.snapToNext();
  };

  return (
    <Carousel
      data={data}
      ref={carouselRef}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
    />
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
    marginBottom: 40,
  },
  seeMoreButton: {
    backgroundColor: "#8454EA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#54EA90",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 60,
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 7,
  },
  titleRoomie: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#8454EA",
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  titleRoulette: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 5,
  },
  safeArea: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    overflow: "hidden",
  },
  whiteContainer: {
    flex: 1,
    padding: 20,
  },
  line: {
    height: 8,
    backgroundColor: "#000",
    borderRadius: 4,
    marginBottom: 10,
    maxWidth: 130,
    marginLeft: 120,
  },
  image: {
    // flex: 1,
    width: "100%",
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 0,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
