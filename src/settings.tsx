import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "./components/header";
import { useSelector } from "react-redux";

export default function Settings({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.settingBackground }]}
    >
      {/* Header.... */}
      <Header
        midText="Settings"
        rightText="Edit"
        background={true}
        rightAction={() => navigation.push("Edit Profile")}
      />
      <View style={[styles.wrapper, { backgroundColor: theme.headerColor }]}>
        <View style={[styles.search, { backgroundColor: theme.searchGray }]}>
          <Image
            source={require("../assets/search_icon.png")}
            style={styles.icon}
          />
          <TextInput
            placeholderTextColor={theme.chatTextboxPlaceholder}
            placeholder="Search"
            style={[styles.searchbox, { color: theme.textDark }]}
            selectionColor={theme.textBlue}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.push("Edit Profile")}
          style={[
            styles.user_acct,
            {
              backgroundColor:
                theme.type == "default"
                  ? theme.backgroundColor
                  : theme.headerColor,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1564598328706-70cecb6ad257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              style={{ width: 70, height: 70, borderRadius: 100 }}
            />
            <View style={styles.user}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Jacob W.
              </Text>
              <Text style={[styles.number, { color: theme.gray }]}>
                +234 816 369 6751
              </Text>
              <Text style={[styles.username, { color: theme.gray }]}>
                @jacob_d
              </Text>
            </View>
          </View>
          <Image
            source={require("../assets/arrow_right.png")}
            style={{ tintColor: theme.gray }}
          />
        </TouchableOpacity>

        {/* ACcount... */}
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor:
                theme.type == "default"
                  ? theme.backgroundColor
                  : theme.headerColor,
              marginTop: 40,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1564598328706-70cecb6ad257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              style={{ width: 35, height: 35, borderRadius: 100 }}
            />
            <View style={styles.user}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Jacob Design
              </Text>
            </View>
          </View>
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

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  theme.type == "default"
                    ? require("../assets/add_icon.png")
                    : require("../assets/add_icon_dark.png")
                }
              />
            </View>
            <View style={[styles.user]}>
              <Text style={[styles.name, { color: theme.textBlue }]}>
                Add Account
              </Text>
            </View>
          </View>
        </View>

        {/* Activities */}
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor:
                theme.type == "default"
                  ? theme.backgroundColor
                  : theme.headerColor,
              marginTop: 40,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/saved_messages_settings.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Saved Messages
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
            </View>
          </View>
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

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/recent_call_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Recent Calls
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
            </View>
          </View>
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
            onPress={() => navigation.push("Sticker Settings")}
            activeOpacity={0.7}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/sticker_settings_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Stickers
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Chat settings */}
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor:
                theme.type == "default"
                  ? theme.backgroundColor
                  : theme.headerColor,
              marginTop: 40,
              marginBottom: 20,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.push("Notifications Settings")}
            activeOpacity={0.7}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../assets/not__n_sound_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Notifications and Sounds
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
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
              source={require("../assets/privacy_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Privacy and Security
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
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
              source={require("../assets/storage_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Data and Storage
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
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
              source={require("../assets/theme_icon.png")}
              style={{ width: 35, height: 35 }}
            />
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Appearance
              </Text>
              <Image
                source={require("../assets/arrow_right.png")}
                style={{ tintColor: theme.gray }}
              />
            </View>
          </TouchableOpacity>
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
});
