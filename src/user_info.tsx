import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "./components/header";
import { useSelector } from "react-redux";

export default function UserInfo({ navigation, route }: any) {
  const username = route.params.username;
  const profile_pic = route.params.profile_pic;
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Header
        leftIcon={true}
        leftText={"Back"}
        midText="Info"
        rightText="Edit"
        background={true}
        action={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top_cont}>
          <View style={styles.img_cont}>
            <Image source={{ uri: profile_pic }} style={styles.profile_pic} />
            <View style={{ marginLeft: 10 }}>
              <Text style={[{ fontSize: 17, color: theme.textDark }]}>
                {username}
              </Text>
              <Text style={[{ color: theme.textBlue, fontSize: 12 }]}>
                online
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={
                theme.type == "default"
                  ? require("../assets/call_icon_unfill.png")
                  : require("../assets/call_icon_unfill_dark.png")
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <View style={styles.section}>
            <Text style={[styles.section_h, { color: theme.textDark }]}>
              main
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={[styles.number, { color: theme.textGreen }]}>
                +234 810 100 3610
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={[styles.section_h, { color: theme.textDark }]}>
              home
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={[styles.number, { color: theme.textBlue }]}>
                +234 816 6369 6751
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={[styles.section_h, { color: theme.textDark }]}>
              bio
            </Text>
            <Text style={[styles.number, { color: theme.textDark }]}>
              Design adds value faster than it adds cost
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.section_h, { color: theme.textDark }]}>
              username
            </Text>

            <TouchableOpacity activeOpacity={0.6}>
              <Text style={[styles.number, { color: theme.textBlue }]}>
                @zack_life
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.section, { marginTop: 30 }]}
            activeOpacity={0.6}
          >
            <Text style={[styles.number, { color: theme.textBlue }]}>
              Send Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} activeOpacity={0.6}>
            <Text style={[styles.number, { color: theme.textBlue }]}>
              Share Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} activeOpacity={0.6}>
            <Text style={[styles.number, { color: theme.textBlue }]}>
              Start Secret Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.section,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30,
              },
            ]}
            activeOpacity={0.6}
          >
            <Text style={styles.number}>Shared Media</Text>
            <Image source={require("../assets/arrow_right.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.section,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
            activeOpacity={0.6}
          >
            <Text style={styles.number}>Notifications</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: theme.gray, marginRight: 10 }}>
                Enabled
              </Text>
              <Image source={require("../assets/arrow_right.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.section,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
            activeOpacity={0.6}
          >
            <Text style={styles.number}>Groups In Common</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: theme.gray, marginRight: 10 }}>1</Text>
              <Image source={require("../assets/arrow_right.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.section, { marginTop: 30 }]}
            activeOpacity={0.6}
          >
            <Text style={[styles.number, { color: theme.deleteColor }]}>
              Block User
            </Text>
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
  top_cont: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img_cont: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_pic: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  body: {
    paddingHorizontal: 15,
  },
  section: {
    marginVertical: 13,
  },
  section_h: {
    fontSize: 12,
  },
  number: {
    fontSize: 15,
  },
});
