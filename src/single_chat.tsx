import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { chatoverview } from "./data/chat_overview";

export default function SingleChat({ navigation, route }: any) {
  const theme = useSelector((state: any) => state.theme);
  const [message, setMessage] = useState("");
  let chats: [
    {
      image: string;
      image_name: string;
      image_size: string;
      user: string;
      message: string;
      time: string;
      status: string;
    }
  ] = route.params.chats;
  let username = route.params.name;
  let profile_pic = route.params.profile_pic;

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={[styles.header, { backgroundColor: theme.headerColor }]}>
        <TouchableOpacity
          style={styles.header_left}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={
              theme.type == "default"
                ? require("../assets/arrow_left.png")
                : require("../assets/arrow_left_dark.png")
            }
          />
          <Text style={{ color: theme.textBlue, marginLeft: 10 }}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.header_center}
          activeOpacity={0.6}
          onPress={() =>
            navigation.push("User Info", { profile_pic, username })
          }
        >
          <Text style={[styles.username, { color: theme.textDark }]}>
            {username}
          </Text>
          <Text style={[styles.last_seen, { color: theme.gray }]}>
            last seen just now
          </Text>
        </TouchableOpacity>
        <View style={styles.header_right}>
          <Image
            source={{
              uri: profile_pic,
            }}
            style={styles.profile_pic}
          />
        </View>
      </View>

      {/* body */}
      <ImageBackground
        source={
          theme.type == "default"
            ? require("../assets/background.png")
            : require("../assets/background_dark.png")
        }
        style={styles.body}
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
              {chat.image ? (
                <View style={styles.chat_img_cont}>
                  <Image source={{ uri: chat.image }} style={styles.chat_img} />
                  <View>
                    <Text style={{ color: theme.chatImageName }}>
                      {chat.image_name}
                    </Text>
                    <Text style={{ color: theme.readColor, fontSize: 11 }}>
                      {chat.image_size}
                    </Text>
                  </View>
                </View>
              ) : (
                <Text style={{ color: theme.textDark }}>{chat.message}</Text>
              )}

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
                        ? theme.readColor
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
                        : require("../assets/read_icon_green_dark.png")
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
          styles.textboxcont,
          {
            backgroundColor:
              theme.type == "default" ? theme.chatTextbox : theme.headerColor,
          },
        ]}
      >
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={require("../assets/attach_icon.png")} />
        </TouchableOpacity>

        <View
          style={[
            styles.textbox,
            {
              backgroundColor: theme.chatTextbox,
              borderColor: theme.chatTextboxBorder,
            },
          ]}
        >
          <TextInput
            placeholderTextColor={theme.chatTextboxPlaceholder}
            style={[{ color: theme.textDark, flex: 1, paddingHorizontal: 7 }]}
            selectionColor={theme.textBlue}
            placeholder="Message"
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={require("../assets/stickers_icon.png")} />
          </TouchableOpacity>
        </View>
        {message.length ? (
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={
                theme.type == "default"
                  ? require("../assets/logo_classic.png")
                  : require("../assets/logo_classic_dark.png")
              }
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={require("../assets/voice_icon.png")} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 13,
    paddingTop: 30,
  },
  header_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  back_btn: {},
  header_center: {
    alignItems: "center",
  },
  username: {
    fontSize: 17,
  },
  last_seen: {
    fontSize: 13,
  },
  header_right: {},
  profile_pic: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  body: {
    flex: 1,
    padding: 4,
    paddingHorizontal: 10,
  },
  chat: {
    marginVertical: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,

    borderTopRightRadius: 10,
    elevation: 1,

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
  chat_img_cont: {
    width: Dimensions.get("screen").width * 0.6,
    flexDirection: "row",
    alignItems: "center",
  },
  chat_img: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  textboxcont: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    paddingTop: 8,
    paddingBottom: 18,
  },
  textbox: {
    flexDirection: "row",
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 8,
    padding: 3,
    alignItems: "center",
  },
});
