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

export default function StickerSettings({ navigation }: any) {
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
        midText="Stickers"
        rightText="Edit"
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
              backgroundColor: theme.settingSectionBackground,
              marginTop: 30,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Suggest by Emoji
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  All Sets
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
                    backgroundColor:
                      theme.type == "default" ? theme.unreadBlue : "#fff",
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
              marginTop: 20,
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Archived Stickers
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>46</Text>
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
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
          <Text style={{ color: theme.gray }}>
            Animated stickers will play in chat continuously.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray }}>STICKER SETS</Text>
        </View>

        {/* Chat settings */}
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.settingSectionBackground,
              marginTop: 5,
            },
          ]}
        >
          {stickers.map((sticker, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: index == 0 ? 0 : 20,
              }}
              key={index}
            >
              <Image source={sticker.image} style={{ width: 40, height: 40 }} />
              <View style={styles.user}>
                <Text style={[styles.name, { color: theme.textDark }]}>
                  {sticker.name}
                </Text>
                <Text style={[styles.number, { color: theme.gray }]}>
                  {sticker.quantity} stickers
                </Text>
              </View>
            </View>
          ))}
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
