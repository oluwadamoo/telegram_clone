import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../login";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";
import Contacts from "../contacts";
import Chats from "../chats";
import Settings from "../settings";
import Calls from "../calls";

const Tab = createBottomTabNavigator();

export default function Bottom() {
  const theme = useSelector((state: any) => state.theme);

  interface SettingProp {
    focused: boolean;
  }
  const SettingsIcon = (props: SettingProp) => (
    <View
      style={[
        {
          backgroundColor:
            props.focused == true ? theme.textBlue : theme.headerColor,
          borderRadius: 1000,
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <View
        style={[
          {
            backgroundColor: theme.backgroundColor,
            borderRadius: 1000,
            height: 28,
            width: 28,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1564598328706-70cecb6ad257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={{ width: 25, height: 25, borderRadius: 100 }}
        />
      </View>
    </View>
  );
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.headerColor,
          alignItems: "center",
          paddingBottom: 8,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/home_icon_active.png")
                    : require("../../assets/home_icon_dark_active.png")
                  : theme.type == "default"
                  ? require("../../assets/home_icon.png")
                  : require("../../assets/home_icon_dark.png")
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/call_icon_active.png")
                    : require("../../assets/call_icon_active_dark.png")
                  : theme.type == "default"
                  ? require("../../assets/call_icon.png")
                  : require("../../assets/call_icon_dark.png")
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? theme.type == "default"
                    ? require("../../assets/chat_icon_active.png")
                    : require("../../assets/chat_icon_active_dark.png")
                  : theme.type == "default"
                  ? require("../../assets/chat_icon.png")
                  : require("../../assets/chat_icon_active.png")
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => <SettingsIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
