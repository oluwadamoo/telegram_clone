import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bottom from "./bottom";
import { StatusBar } from "expo-status-bar";
import Login from "../login";
import Register from "../register";
import SingleChat from "../single_chat";
import UserInfo from "../user_info";
import EditProfile from "../edit_profile";
import StickerSettings from "../sticker_setting";
import DataAndStorageSettings from "../data_storage_settings";
import NotificationSettings from "../notification_setting";
import PrivacySettings from "../privacy_settings";
import AppearanceSettings from "../appearance_settings";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={Bottom} />

      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Single Chat" component={SingleChat} />
      <Stack.Screen name="User Info" component={UserInfo} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Sticker Settings" component={StickerSettings} />
      <Stack.Screen
        name="Notifications Settings"
        component={NotificationSettings}
      />
      <Stack.Screen name="Privacy Settings" component={PrivacySettings} />
      <Stack.Screen
        name="Storage Settings"
        component={DataAndStorageSettings}
      />
      <Stack.Screen name="Appearance Settings" component={AppearanceSettings} />
    </Stack.Navigator>
  );
}
