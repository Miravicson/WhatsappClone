import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const NewMessageButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons
        name={"message-reply-text"}
        size={28}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default NewMessageButton;
