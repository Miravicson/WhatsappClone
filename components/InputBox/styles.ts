import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    // alignSelf: 'stretch',
    paddingBottom: 4,
  },
  icons: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
