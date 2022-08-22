import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./style";
import { ChatRoom } from "../../types";
import { showDateSinceDateOrNow } from "../../utils/dateTime";
import { useNavigation } from "@react-navigation/native";

type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPressTouchable = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, user });
  };

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text
              style={styles.lastMessage}
              numberOfLines={1}
              ellipsizeMode={"tail"}
            >
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {showDateSinceDateOrNow(chatRoom.lastMessage.createdAt as string)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
