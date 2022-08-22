import { useRoute } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function ChatRoomScreen({}: RootTabScreenProps<"Chats">) {
  const route = useRoute();
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
