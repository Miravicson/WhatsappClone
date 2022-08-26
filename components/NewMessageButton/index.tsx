import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {
  const navigation = useNavigation();

  const handlePressNewMessageButton = () => {
    navigation.navigate("Contacts");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePressNewMessageButton}
    >
      <MaterialCommunityIcons
        name={"message-reply-text"}
        size={28}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default NewMessageButton;
