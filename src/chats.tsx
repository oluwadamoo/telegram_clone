import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import ChatCard from "./components/chat_card";
import { chatoverview } from "./data/chat_overview";
import Header from "./components/header";

export default function Chats({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme);
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const renderHiddenItem = (data: any, rowMap: any) => (
    <View style={[styles.rowBack, { backgroundColor: theme.backgroundColor }]}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backLeftBtnRearLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/unread_icon.png")} />
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 3 }}>
            Unread
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backLeftBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/pin_icon_big.png")} />
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 3 }}>
            Pins
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRearLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/mute_icon.png")} />
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 3 }}>
            Mute
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => console.log(data, rowMap, "delete....")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/delete_icon.png")} />
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 3 }}>
            Delete
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => console.log(data, rowMap, "delete....")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/archive_icon.png")} />
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 3 }}>
            Archive
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const onRowDidOpen = (rowKey: any) => {
    // console.log("This row opened", rowKey);
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Text style={[styles.edit, { color: theme.textBlue }]}>Edit</Text>
        </TouchableOpacity>
        <Text style={[styles.header_text, { color: theme.textDark }]}>
          Chats
        </Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/edit_icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View> */}

      <Header
        leftText={"Edit"}
        midText="Chats"
        rightIcon={require("../assets/edit_icon.png")}
      />

      <View style={styles.wrapper}>
        <View style={[styles.search, { backgroundColor: theme.searchGray }]}>
          <Image
            source={require("../assets/search_icon.png")}
            style={styles.icon}
          />
          <TextInput
            placeholderTextColor={theme.chatTextboxPlaceholder}
            placeholder="Search for messages or users"
            style={[styles.searchbox, { color: theme.textDark }]}
            selectionColor={theme.textBlue}
          />
        </View>
      </View>

      {/* Items */}
      <View style={{ marginTop: 10, marginBottom: 120 }}>
        <SwipeListView
          data={chatoverview}
          renderItem={(item: any) => {
            return (
              <>
                <ChatCard
                  navigation={navigation}
                  profile_pic={item.item.profile_pic}
                  name={item.item.name}
                  last_msg={item.item.last_msg}
                  time={item.item.time}
                  isPinned={item.item.isPinned}
                  isRead={item.item.isRead}
                  unreadMsg={item.item.unreadMsg}
                  chats={item.item.chats}
                />
              </>
            );
          }}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75 + 75}
          rightOpenValue={-220}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  edit: {},
  header_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {},
  wrapper: {
    paddingHorizontal: 15,
  },
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

  // Stuff
  backTextWhite: {
    color: "#FFF",
  },
  rowBack: {
    height: 70,
    marginVertical: 10,

    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    height: 70,
    width: 75,
  },
  backLeftBtnRearLeft: {
    height: 70,
    backgroundColor: "#007EE5",

    left: 0,
  },
  backLeftBtnLeft: {
    height: 70,
    backgroundColor: "#00C900",

    left: 75,
  },
  backRightBtnRearLeft: {
    height: 70,
    backgroundColor: "#F09A37",

    right: 75 + 75,
  },

  backRightBtnLeft: {
    height: 70,
    right: 75,
    backgroundColor: "#FE3B30",
  },
  backRightBtnRight: {
    backgroundColor: "#BBBBC3",

    right: 0,
  },
});
