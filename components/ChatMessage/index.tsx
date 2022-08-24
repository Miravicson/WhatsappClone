import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Message } from "../../types";
import { showDateSinceDateOrNow } from "../../utils/dateTime";
import { Text, View } from "../Themed";
import styles from "./styles";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  const checkIsOutGoingMessage = () => {
    return message.user!.id === "u1";
  };

  const isOutGoingMessage = checkIsOutGoingMessage();

  const messageBoxStyles: Array<any> = [styles.messageBox];

  if (isOutGoingMessage) {
    messageBoxStyles.push(styles.outGoingMessage);
  }
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={messageBoxStyles}>
          {!isOutGoingMessage && <Text style={styles.name}>{message.user!.name}</Text>}
          <Text style={styles.message}>{message.content}</Text>
          <Text style={styles.time}>{showDateSinceDateOrNow(message.createdAt as string)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatMessage;
