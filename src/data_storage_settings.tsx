import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Switch,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/header";
import { useSelector } from "react-redux";
import { stickers } from "./data/stickers";

export default function DataAndStorageSettings({ navigation }: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.settingBackground }]}
    >
      {/* Header.... */}
      <Header
        leftIcon={true}
        leftText={"Back"}
        midText="Data and Storage"
        background={true}
        action={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}></View>
        {/* ACcount... */}
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              marginTop: 30,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Storage Usage
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Network Usage
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Loop Animated Stickers
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            </View>
          </View> */}
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>AUTOMATIC MEDIA DOWNLOAD</Text>
        </View>

        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              marginTop: 10,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <View>
                <Text style={[styles.name, { color: theme.textDark }]}>
                  Using Cellular
                </Text>
                <Text style={{ color: theme.gray, fontSize: 13 }}>
                  Disabled
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <View>
                <Text style={[styles.name, { color: theme.textDark }]}>
                  Using Wi-Fi
                </Text>
                <Text style={{ color: theme.gray, fontSize: 13 }}>
                  Disabled
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textBlue }]}>
                Reset Auto-Download Settings
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Autoplay media */}
        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>AUTO-PLAY MEDIA</Text>
        </View>

        {/* Chat settings */}
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              marginTop: 10,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>GIFs</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[
                    styles.toggle,
                    {
                      backgroundColor: isEnabled ? "#77d572" : "#fff",
                      borderWidth: 2,
                      borderColor: "#e6e6e6",
                    },
                  ]}
                >
                  <Switch
                    trackColor={{ false: "#ffff", true: "#77d572" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Videos
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[
                    styles.toggle,
                    {
                      backgroundColor: isEnabled ? "#77d572" : "#fff",
                      borderWidth: 2,
                      borderColor: "#e6e6e6",
                    },
                  ]}
                >
                  <Switch
                    trackColor={{ false: "#ffff", true: "#77d572" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>VOICE CALLS</Text>
        </View>

        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              marginTop: 10,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <View>
                <Text style={[styles.name, { color: theme.textDark }]}>
                  Use Less Data
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Never
                </Text>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>OTHER</Text>
        </View>

        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              marginTop: 10,
              marginBottom: 30,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <View>
                <Text style={[styles.name, { color: theme.textDark }]}>
                  Save Incoming Photos
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Save Edited Photos
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[
                    styles.toggle,
                    {
                      backgroundColor: isEnabled ? "#77d572" : "#fff",
                      borderWidth: 2,
                      borderColor: "#e6e6e6",
                    },
                  ]}
                >
                  <Switch
                    trackColor={{ false: "#ffff", true: "#77d572" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Chat settings */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  icon: {},

  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 7,
  },
  searchbox: {
    marginLeft: 10,
  },
  user_acct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15,
  },
  user: {
    marginLeft: 13,
  },
  name: {
    fontSize: 16,
  },
  number: {},
  username: {
    fontSize: 13,
  },
  activities: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  toggle: {
    width: 45,
    backgroundColor: "#77d572",
    height: 25,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
