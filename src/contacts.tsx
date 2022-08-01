import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import Header from "./components/header";
import { useSelector } from "react-redux";
import { contacts } from "./data/contacts";

export default function Contacts() {
  const theme = useSelector((state: any) => state.theme);
  function SortContact(x: any, y: any) {
    return x.name.localeCompare(y.name);
  }

  interface ContactProps {
    image: string;
    status: string;
    name: string;
  }
  const Contact = (props: ContactProps) => (
    <View style={styles.contact}>
      <Image source={{ uri: props.image }} style={styles.profile_pic} />
      <View>
        <Text style={{ color: theme.textDark, fontSize: 16 }}>
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: props.status == "online" ? "#007AFF" : theme.gray,
          }}
        >
          {props.status}
        </Text>
      </View>
    </View>
  );
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Header
        midText="Contacts"
        rightIcon={
          theme.type == "default"
            ? require("../assets/add_icon.png")
            : require("../assets/add_icon_dark.png")
        }
        background={true}
      />
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ paddingHorizontal: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={
                    theme.type == "default"
                      ? require("../assets/location_icon.png")
                      : require("../assets/location_icon_dark.png")
                  }
                />
                <Text
                  style={{
                    color: theme.textBlue,
                    fontSize: 15,
                    marginLeft: 15,
                  }}
                >
                  Add People Nearby
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                  marginVertical: 15,
                }}
              >
                <Image
                  source={
                    theme.type == "default"
                      ? require("../assets/invite_icon.png")
                      : require("../assets/invite_icon_dark.png")
                  }
                />
                <Text
                  style={{
                    color: theme.textBlue,
                    fontSize: 15,
                    marginLeft: 15,
                  }}
                >
                  Invite Friends
                </Text>
              </View>
            </View>
          )}
          data={contacts.sort(SortContact)}
          ItemSeparatorComponent={() => (
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
          )}
          renderItem={(item) => (
            <Contact
              image={item.item.profile_pic}
              status={item.item.status}
              name={item.item.name}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
  },
  contact: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  profile_pic: {
    width: 42,
    height: 42,
    borderRadius: 100,
    marginRight: 10,
  },
});
