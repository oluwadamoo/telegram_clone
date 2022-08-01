import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./components/header";
export default function Register({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={[styles.cancel, { color: theme.textBlue }]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Tab")}>
          <Text style={[styles.next, { color: theme.textBlue }]}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.welcome_wrapper}>
        <View style={styles.welcome_container}>
          <Text style={[styles.welcome_header, { color: theme.textDark }]}>
            Your Phone
          </Text>
          <Text style={[styles.welcome_text, { color: theme.textDark }]}>
            Please confirm your country code and enter your phone number.
          </Text>
        </View>
      </View>

      <View style={styles.textbox_cont}>
        <Text style={[styles.country, { color: theme.textDark }]}>NGN</Text>
        <View style={styles.textbox_wrapper}>
          <Text style={[styles.c_code, { color: theme.textDark }]}>+234</Text>
          <TextInput
            placeholderTextColor={theme.chatTextboxPlaceholder}
            placeholder="Your phone number"
            style={[styles.textbox, { color: theme.textDark }]}
            selectionColor={theme.textBlue}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={styles.sync_contacts}>
        <Text style={styles.sync_text}>Sync Contacts</Text>
        <View
          style={[
            styles.toggle,
            { backgroundColor: isEnabled ? "#77d572" : "#767577" },
          ]}
        >
          <Switch
            trackColor={{ false: "#767577", true: "#77d572" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
    padding: 15,
  },
  header: {
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcome_wrapper: {
    alignItems: "center",
  },
  welcome_container: {
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.6,
  },
  welcome_header: {
    fontSize: 22,
    marginBottom: 15,
  },
  welcome_text: {
    textAlign: "center",
  },
  cancel: {},
  next: {
    // fontWeight: "bold",
  },
  textbox_cont: {
    marginTop: 70,
  },
  country: {
    fontSize: 16,
  },
  textbox_wrapper: {
    borderTopColor: "#AEAEB2",
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
  },
  c_code: {
    marginRight: 20,
  },
  textbox: {
    borderLeftColor: "#AEAEB2",
    borderLeftWidth: 1,
    height: 40,
    width: "100%",
    paddingHorizontal: 15,
  },
  sync_contacts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  sync_text: {},
  toggle: {
    width: 45,
    backgroundColor: "#77d572",
    height: 25,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
