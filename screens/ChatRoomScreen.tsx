import { useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground } from "react-native";
import ChatMessage from "../components/ChatMessage";
import Chats from "../data/Chats";
import { Message, RootTabScreenProps } from "../types";
const BG = require("../assets/images/BG.png");

export default function ChatRoomScreen({}: RootTabScreenProps<"Chats">) {
  const route = useRoute();
  const renderItem = ({ item: message }: { item: Message }) => (
    <ChatMessage message={message} />
  );
  const keyExtractor = (item: Message) => item.id;
  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={Chats.messages}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        // inverted
      />
    </ImageBackground>
  );
}
