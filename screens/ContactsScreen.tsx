import { FlatList, Dimensions, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { ChatRoom, RootTabScreenProps, User } from "../types";
import users from "../data/Users";
import { View } from "../components/Themed";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";

export default function ContactsScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  const renderItem = ({ item: user }: { item: User }) => (
    <ContactListItem user={user} />
  );
  const keyExtractor = (item: User) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={{
          width: Dimensions.get("window").width,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
