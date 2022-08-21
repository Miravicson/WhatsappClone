import { FontAwesome, Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootTabScreenProps, RootTabParamList } from "../types";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
export const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

export function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 3,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"Camera">) => ({
          title: "Camera",
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          tabBarShowLabel: false,
          tabBarItemStyle: {
            borderColor: "green",
            borderStyle: "solid",
          },
        })}
      />
      <MainTab.Screen
        name="Chats"
        component={TabTwoScreen}
        options={{
          title: "Chats",
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          title: "Status",
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: "Calls",
        }}
      />
    </MainTab.Navigator>
  );
}
