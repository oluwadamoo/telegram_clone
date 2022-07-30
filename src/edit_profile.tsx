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

export default function EditProfile({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.settingBackground }]}
    >
      {/* Header.... */}
      <Header
        leftIcon={true}
        leftText={"Back"}
        midText="Edit Profile"
        rightText="Done"
        background={true}
        action={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[styles.user_acct, { backgroundColor: theme.backgroundColor }]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View
              style={{
                backgroundColor: "#00000069",
                height: 70,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                position: "absolute",
                zIndex: 100,
              }}
            >
              <Image source={require("../assets/camera_icon.png")} />
            </View>
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
              <TextInput
                placeholderTextColor={theme.chatTextboxPlaceholder}
                placeholder="Last Name"
                style={[{ color: theme.textDark, marginTop: 20 }]}
                selectionColor={theme.textBlue}
              />
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
          <Text style={{ color: theme.gray }}>
            Enter your name and add an optional profile photo
          </Text>
        </View>
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
            <View style={styles.user}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Digital goodies designer - Pixsellz
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
          <Text style={{ color: theme.gray }}>
            Any details such as age, occupation or city. Example: 23 y.o.
            designer from San Francisco.
          </Text>
        </View>

        {/* Activities */}
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
                Change Number
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  +234 816 369 6751
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
                Username
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: theme.gray, marginRight: 10, fontSize: 16 }}
                >
                  @jacob_designer
                </Text>
                <Image source={require("../assets/arrow_right.png")} />
              </View>
            </View>
          </View>
        </View>

        {/* Chat settings */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              justifyContent: "center",

              marginTop: 40,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.user,
                styles.activities,
                { justifyContent: "center" },
              ]}
            >
              <Text style={[styles.name, { color: theme.textBlue }]}>
                Add Account
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Chat settings */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
              justifyContent: "center",

              marginTop: 40,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.user,
                styles.activities,
                { justifyContent: "center" },
              ]}
            >
              <Text style={[styles.name, { color: theme.deleteColor }]}>
                Log Out
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
