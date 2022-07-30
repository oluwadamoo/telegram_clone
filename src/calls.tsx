import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { calls } from "./data/calls";
import Header from "./components/header";
import { useSelector } from "react-redux";

export default function Calls() {
  const theme = useSelector((state: any) => state.theme);

  interface CallProps {
    name: string;
    type: string;
    duration: string;
    date: string;
    profile_pic: string;
  }
  const CallSection = (call: CallProps) => (
    <TouchableOpacity style={styles.calls} activeOpacity={0.8}>
      <View style={styles.calls_left}>
        {call.type.toLowerCase() === "outgoing" && (
          <Image source={require("../assets/outgoing_call_icon.png")} />
        )}
        <Image
          source={{ uri: call.profile_pic }}
          style={[
            styles.profile_pic,
            { marginLeft: call.type.toLowerCase() === "outgoing" ? 10 : 23 },
          ]}
        />
        <View style={styles.call_details}>
          <Text
            style={{
              fontSize: 13,
              color:
                call.type.toLowerCase() === "missed"
                  ? theme.deleteColor
                  : theme.textDark,
            }}
          >
            {call.name}
          </Text>
          <Text style={{ color: theme.gray, fontSize: 13 }}>
            {call.type} {call.duration && `(${call.duration})`}
          </Text>
        </View>
      </View>

      <View style={styles.calls_right}>
        <Text style={{ color: theme.gray, fontSize: 13, marginRight: 10 }}>
          {call.date}
        </Text>
        <Image
          source={
            theme.type == "default"
              ? require("../assets/info_icon.png")
              : require("../assets/info_icon_dark.png")
          }
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Header
        background={true}
        leftText={"Edit"}
        midText={"All"}
        rightIcon={
          theme.type == "default"
            ? require("../assets/add_call_icon.png")
            : require("../assets/add_call_icon.png")
        }
      />

      <FlatList
        data={calls}
        renderItem={(item) => (
          <CallSection
            name={item.item.name}
            profile_pic={item.item.profile_pic}
            date={item.item.date}
            type={item.item.type}
            duration={item.item.duration}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 2,
  },
  calls: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  calls_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_pic: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: 10,
  },
  call_details: {
    marginLeft: 10,
  },
  calls_right: {
    flexDirection: "row",
    alignItems: "center",
  },
});
