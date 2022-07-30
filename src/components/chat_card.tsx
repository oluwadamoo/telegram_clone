import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  profile_pic: any;
  name: string;
  last_msg: string;
  time: string;
  isPinned: boolean;
  isRead: boolean;
  unreadMsg: number;
  chats: [];
  navigation: any;
}
export default function ChatCard(item: Props) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        item.navigation.navigate("Single Chat", {
          chats: item.chats,
          profile_pic: item.profile_pic,
          name: item.name,
        })
      }
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.img_container}>
          <Image
            source={
              item.profile_pic === "saved"
                ? require("../../assets/saved_messages.png")
                : { uri: item.profile_pic }
            }
            style={styles.img}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={[theme.textDark]}>{item.name}</Text>
          <Text style={[{ color: theme.gray }]}>{item.last_msg}</Text>
        </View>
      </View>
      <View>
        <Text style={[{ color: theme.gray }]}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    justifyContent: "space-between",
    height: 80,
  },
  img_container: {},
  img: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
