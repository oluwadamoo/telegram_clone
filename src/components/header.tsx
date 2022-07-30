import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  leftText?: string;
  rightText?: string;
  midText?: string;
  leftIcon?: any;
  rightIcon?: any;
  navigation?: any;
  background?: any;
  action?: () => void;
}
export default function Header(props: Props) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: props.background ? theme.headerColor : "transparent",
        },
      ]}
    >
      <TouchableOpacity
        style={styles.header_left}
        activeOpacity={0.6}
        onPress={props.action && props.action}
      >
        {props.leftIcon && (
          <Image
            source={
              theme.type == "default"
                ? require("../../assets/arrow_left.png")
                : require("../../assets/arrow_left_dark.png")
            }
          />
        )}
        <Text style={{ color: theme.textBlue, marginLeft: 10 }}>
          {props.leftText}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.header_text, { color: theme.textDark }]}>
        {props.midText}
      </Text>
      <TouchableOpacity>
        {props.rightIcon && (
          <Image source={props.rightIcon} style={styles.icon} />
        )}
        {props.rightText && (
          <Text style={{ color: theme.textBlue }}>{props.rightText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  header_left: {
    flexDirection: "row",
    alignItems: "center",
  },
});
