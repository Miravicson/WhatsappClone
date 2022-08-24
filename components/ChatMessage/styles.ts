import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'transparent',
    marginVertical: 5,
  },
  messageBox: {
    borderRadius: 5,
    backgroundColor: "#e5e5e5",
    marginRight: 50,
    padding: 10,
  },
  outGoingMessage: {
    backgroundColor: '#DCF8C5',
    marginRight: 0,
    marginLeft: 50,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey'
  }
});

export default styles;
