import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";

import Root from "./src/routes/root";
import store from "./src/redux/store";

const RootNav = () => {
  const theme = useSelector((state: any) => state.theme);

  return (
    <>
      <StatusBar style={theme.type == "default" ? "dark" : "light"} />
      <Root />
    </>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
}
