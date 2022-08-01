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

export default function PrivacySettings({ navigation }: any) {
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
        midText="Privacy and Security"
        background={true}
        action={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ACcount... */}

        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.settingSectionBackground,
              marginTop: 40,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.push("Notifications Settings")}
            activeOpacity={0.7}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/blocked_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Blocked Users
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>9</Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* divider */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                height: 0.7,
                marginLeft: 50,
                marginVertical: 5,
                backgroundColor:
                  theme.type == "default" ? "#D8D8D8" : "#5f5f5f",
              }}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.push("Privacy Settings")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/active_sessions.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Active Sessions
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>2</Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* divider */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                height: 0.7,
                marginLeft: 50,
                marginVertical: 5,
                backgroundColor:
                  theme.type == "default" ? "#D8D8D8" : "#5f5f5f",
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.push("Storage Settings")}
            activeOpacity={0.7}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/face_id_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Passcode & Face ID
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>Off</Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* divider */}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                height: 0.7,
                marginLeft: 50,
                marginVertical: 5,
                backgroundColor:
                  theme.type == "default" ? "#D8D8D8" : "#5f5f5f",
              }}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.push("Appearance Settings")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/verification_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Two-Step Verification
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>On</Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* PRIVACY */}

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>PRIVACY</Text>
        </View>

        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.settingSectionBackground,
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
                Phone Number
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  My Contacts
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
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
                Last Seen & Online
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Nobody (+14)
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
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
                Profile Photo
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Everybody
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
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
                Voice Calls
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Nobody (+7)
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
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
                Forwarded Messages
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Everybody
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
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
                Groups & Channels
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Everybody
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
          <Text style={{ color: theme.gray }}>
            Change who can add you to groups and channels
          </Text>
        </View>

        {/* Group notifications */}

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>
            AUTOMATICALLY DELETE MY ACCOUNT
          </Text>
        </View>
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.settingSectionBackground,
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
                If Away For
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  6 months
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ paddingHorizontal: 15, paddingTop: 5, marginBottom: 10 }}
        >
          <Text style={{ color: theme.gray }}>
            If you do not come online at least once within this period, your
            account will be deleted along with all messages and contacts.
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
