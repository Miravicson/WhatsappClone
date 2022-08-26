import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const InputBox = () => {
  const [message, setMessage] = React.useState("");
  let shouldShowCameraButton = false;
  let primaryIcon: "microphone" | "send" = "send";
  let shouldShowSendButton = true;

  if (!message) {
    shouldShowCameraButton = true;
    primaryIcon = "microphone";
    shouldShowSendButton = false;
  }

  const handlePressMicrophone = () => {
    console.log("Pressed microphone");
  };

  const handlePressAttachment = () => {
    console.log("Pressed attachment");
  };

  const handlePressCamera = () => {
    console.log("Pressed camera");
  };

  const handlePressSend = () => {
    console.log("Pressed send button");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name={`laugh-beam`} size={24} color="grey" />
        <TextInput
          style={styles.textInput}
          multiline
          onChangeText={setMessage}
          value={message}
        />
        <TouchableOpacity onPress={handlePressAttachment}>
          <Entypo
            name={`attachment`}
            size={22}
            color="grey"
            style={styles.icons}
          />
        </TouchableOpacity>
        {shouldShowCameraButton && (
          <TouchableOpacity onPress={handlePressCamera}>
            <Fontisto name={`camera`} size={22} color="grey" />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={shouldShowSendButton ? handlePressSend : handlePressMicrophone}
      >
        <View style={styles.buttonContainer}>
          <MaterialCommunityIcons name={primaryIcon} size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
