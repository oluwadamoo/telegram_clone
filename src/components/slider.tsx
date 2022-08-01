import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useSelector } from "react-redux";

const TextSlider = () => {
  const theme = useSelector((state: any) => state.theme);
  const [value, setValue] = React.useState(0);
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={12}
        trackMarks={[0, 3, 6, 9, 12]}
        trackClickable={true}
        thumbTintColor={"#fff"}
        thumbStyle={{ elevation: 2, width: 30, height: 30, borderRadius: 100 }}
        minimumTrackTintColor={theme.textBlue}
        trackStyle={{ backgroundColor: theme.gray }}
        value={value}
        onValueChange={(value: any) => setValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export { TextSlider };
