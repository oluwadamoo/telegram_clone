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

export default function NotificationSettings({ navigation }: any) {
  const [isEnabled, setIsEnabled] = useState(true);
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
        midText="Notifications"
        background={true}
        action={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}></View>
        {/* ACcount... */}
        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 20 }}>
          <Text style={{ color: theme.gray }}>SHOW NOTIFICATIONS FROM</Text>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                All Accounts
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
          </View>
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Suggest by Emoji
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  All Sets
                </Text>
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
                Trending Stickers
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: theme.unreadBlue,
                    marginRight: 10,
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ color: theme.backgroundColor, fontSize: 13 }}>
                    15
                  </Text>
                </View>
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
                Archived Stickers
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>46</Text>
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
                Masks
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: theme.gray, marginRight: 10, fontSize: 16 }}
                ></Text>
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

        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
          <Text style={{ color: theme.gray }}>
            Turn this off if you want to receive notifications only from your
            active account.
          </Text>
        </View>

        {/* message notifications */}

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>MESSAGE NOTIFICATIONS</Text>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Show Notifications
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
                Message Preview
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
                Sound
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>None</Text>
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
                Exceptions
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  66 chats
                </Text>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
          <Text style={{ color: theme.gray }}>
            Set custom notifications for specific users.
          </Text>
        </View>

        {/* Group notifications */}

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>GROUP NOTIFICATIONS</Text>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Show Notifications
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
                Message Preview
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
                Sound
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>None</Text>
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
                Exceptions
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>Add</Text>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ paddingHorizontal: 15, paddingTop: 5, marginBottom: 10 }}
        >
          <Text style={{ color: theme.gray }}>
            Set custom notifications for specific groups.
          </Text>
        </View>
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
