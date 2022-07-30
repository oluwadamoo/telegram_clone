import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";
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
        thumbTintColor={theme.backgroundColor}
        thumbStyle={{ elevation: 2 }}
        minimumTrackTintColor={theme.textBlue}
        trackStyle={{ backgroundColor: theme.gray }}
        value={value}
        onValueChange={(value: any) => setValue(value)}
      />
    </View>
  );
};
// class TextSlider extends React.Component {
//   state = {
//     value: 0.2,
//   };

//   render() {
//     const theme = useSelector((state: any) => state.theme);

//   }
// }

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
