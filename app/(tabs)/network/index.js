import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ConnectRequest from "../../../components/ConnectRequest";
import Recommendation from "../../../components/Recommendation";

const index = () => {
  const [choice, setChoice] = useState("request");
  const handleChoice = (ch) => {
    setChoice(ch);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          backgroundColor: "lightgray",
          marginBottom: 10,
        }}
      >
        <Pressable onPress={() => handleChoice("request")}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: choice === "request" ? "blue" : "gray",
              borderBottomWidth: choice === "request" ? 2 : 0,
            }}
          >
            Connect Requests
          </Text>
        </Pressable>
        <Pressable onPress={() => handleChoice("recommendation")}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: choice === "recommendation" ? "blue" : "gray",
              borderBottomWidth: choice === "recommendation" ? 2 : 0,
            }}
          >
            Recomendation
          </Text>
        </Pressable>
      </View>
      {choice === "request" ? <ConnectRequest /> : <Recommendation />}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
