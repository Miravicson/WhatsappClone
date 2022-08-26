import { FlatList, Dimensions } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { ChatRoom, RootTabScreenProps } from "../types";
import chatRooms from "../data/ChatRooms";
import { View } from "../components/Themed";

export default function ChatsScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  const renderItem = ({ item: chatRoom }: { item: ChatRoom }) => (
    <ChatListItem chatRoom={chatRoom} />
  );
  const keyExtractor = (item: ChatRoom) => item.id;

  return (
    <View>
      <FlatList
        data={chatRooms}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={{
          width: Dimensions.get("window").width,
          height: "100%",
        }}
      />
    </View>
  );
}
