import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./style";
import { User } from "../../types";
import { showDateSinceDateOrNow } from "../../utils/dateTime";
import { useNavigation } from "@react-navigation/native";

type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();

  const onPressTouchable = () => {
    navigation.navigate("ChatRoom", { id: '', user });
  };

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text
              style={styles.status}
              numberOfLines={1}
              ellipsizeMode={"tail"}
            >
              {user.status || 'Available'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
