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
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { stickers } from "./data/stickers";
import { chatoverview } from "./data/chat_overview";
import { Slider } from "@miblanchard/react-native-slider";
import { TextSlider } from "./components/slider";
import { darkMode, lightMode } from "./redux/colorReducer";

export default function AppearanceSettings({ navigation }: any) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [fontSize, setFontSize] = useState(0.2);

  const dispatch = useDispatch();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const theme = useSelector((state: any) => state.theme);
  const chats = chatoverview[1].chats?.slice(0, 2);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.settingBackground }]}
    >
      {/* Header.... */}
      <Header
        leftIcon={true}
        leftText={"Back"}
        midText="Appearance"
        rightIcon={
          theme.type == "default"
            ? require("../assets/save_icon.png")
            : require("../assets/save_icon_dark.png")
        }
        background={true}
        action={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 5,
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: theme.gray, fontSize: 13 }}>COLOR THEME</Text>
        </View>
        <ImageBackground
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
          source={
            theme.type == "default"
              ? require("../assets/background.png")
              : require("../assets/background_dark.png")
          }
        >
          {chats?.map((chat, index) => {
            return (
              <View
                style={[
                  styles.chat,
                  chat.user == "me" ? styles.mychat : styles.friendchat,
                  {
                    backgroundColor:
                      chat.user == "me" ? theme.myChatBox : theme.friendChatBox,
                  },
                ]}
                key={index}
              >
                <Text style={{ color: theme.textDark }}>{chat.message}</Text>

                <View
                  style={{
                    alignSelf: "flex-end",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color:
                        chat.user == "me"
                          ? theme.type == "default"
                            ? theme.readColor
                            : theme.friendTimeGray
                          : theme.friendTimeGray,
                      fontSize: 10,
                    }}
                  >
                    {chat.time}
                  </Text>
                  {chat.user == "me" && (
                    <Image
                      source={
                        theme.type == "default"
                          ? require("../assets/read_icon_green.png")
                          : require("../assets/read_icon_dark.png")
                      }
                      style={{ marginLeft: 3 }}
                    />
                  )}
                </View>
              </View>
            );
          })}
        </ImageBackground>
        <View
          style={[
            styles.user_acct,
            {
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: theme.backgroundColor,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.user, styles.activities]}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => dispatch(lightMode())}
                    activeOpacity={0.7}
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 20,
                    }}
                  >
                    <View
                      style={{
                        borderWidth: theme.type == "default" ? 2 : 0,
                        borderRadius: 18,
                        borderColor: theme.textBlue,
                      }}
                    >
                      <Image source={require("../assets/default_theme.png")} />
                    </View>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 13,
                        color:
                          theme.type == "default"
                            ? theme.textBlue
                            : theme.textDark,
                      }}
                    >
                      Classic
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => dispatch(darkMode())}
                    activeOpacity={0.7}
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 20,
                    }}
                  >
                    <View
                      style={{
                        borderWidth: theme.type == "dark" ? 2 : 0,
                        borderRadius: 18,
                        borderColor: theme.textBlue,
                      }}
                    >
                      <Image source={require("../assets/dark_theme.png")} />
                    </View>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 13,
                        color:
                          theme.type == "dark"
                            ? theme.textBlue
                            : theme.textDark,
                      }}
                    >
                      Classic
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.user, styles.activities]}>
              <Text style={[styles.name, { color: theme.textDark }]}>
                Chat Background
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
                ></View>
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
                Auto-Night Mode
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: theme.gray, marginRight: 10 }}>
                  Disabled
                </Text>
                <Image
                  source={require("../assets/arrow_right.png")}
                  style={{ tintColor: theme.gray }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray, fontSize: 13 }}>TEXT SIZE</Text>
        </View>

        {/* Chat settings */}
        <View
          style={[
            styles.user_acct,
            {
              backgroundColor: theme.settingSectionBackground,
              marginTop: 5,
            },
          ]}
        >
          <Image
            source={
              theme.type == "default"
                ? require("../assets/small_a.png")
                : require("../assets/small_a_dark.png")
            }
          />
          <TextSlider />
          <Image
            source={
              theme.type == "default"
                ? require("../assets/big_a.png")
                : require("../assets/big_a_dark.png")
            }
          />
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 5, marginTop: 30 }}>
          <Text style={{ color: theme.gray, fontSize: 13 }}>APP ICON</Text>
        </View>

        {/* Chat settings */}
        <View
          style={[
            styles.user_acct,
            {
              backgroundColor: theme.settingSectionBackground,
              marginTop: 5,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <View
                style={{
                  borderWidth: theme.type == "default" ? 1 : 0,
                  borderRadius: 15,
                  padding: 3,
                  borderColor: theme.textBlue,
                }}
              >
                <Image source={require("../assets/logo_default.png")} />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color:
                    theme.type == "default" ? theme.textBlue : theme.textDark,
                }}
              >
                Default X
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 30,
              }}
            >
              <View
                style={{
                  borderWidth: theme.type == "default" ? 1 : 0,
                  borderRadius: 15,
                  padding: 3,
                  borderColor: theme.gray,
                }}
              >
                <Image source={require("../assets/logo_dark.png")} />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: theme.textDark,
                }}
              >
                Default X
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <View
                style={{
                  borderWidth: theme.type == "default" ? 1 : 0,
                  borderRadius: 15,
                  padding: 3,
                  borderColor: theme.gray,
                }}
              >
                <Image source={require("../assets/logo_classic.png")} />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: theme.textDark,
                }}
              >
                Classic X
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <View
                style={{
                  borderWidth: theme.type == "default" ? 1 : 0,
                  borderRadius: 15,
                  padding: 3,
                  borderColor: theme.gray,
                }}
              >
                <Image source={require("../assets/logo_classic_dark.png")} />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: theme.textDark,
                }}
              >
                Classic X
              </Text>
            </TouchableOpacity>
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
  chat: {
    marginVertical: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,

    borderTopRightRadius: 10,
    elevation: 2,

    maxWidth: Dimensions.get("screen").width * 0.6,
  },
  mychat: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: "flex-end",
  },
  friendchat: {
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,

    alignSelf: "flex-start",
  },
});
