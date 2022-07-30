import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function Login({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {},
  form: {
    marginTop: 30,
  },
  input_cont: {
    padding: 7,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "#e5e2e2",
    marginVertical: 6,
    backgroundColor: "#f7f5f5",
    borderRadius: 2,
  },
  input: {
    color: "#202020",
  },
  forgot_cont: {
    marginVertical: 10,
    marginBottom: 15,
    alignSelf: "flex-end",
  },
  forgot: {
    color: "#13a4e8",
    fontSize: 13,
  },

  footer: {
    paddingTop: 14,
    marginTop: "auto",
    borderTopColor: "#d4d4d4",
    borderTopWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  footer_cont: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer_text: {
    color: "#b3b1b1",
    marginRight: 5,
  },
  signup_cont: {
    flexDirection: "row",
    marginTop: 50,
  },
  signup_txt: {
    color: "#b3b1b1",
  },
  signup: {
    color: "#13a4e8",
  },
});
