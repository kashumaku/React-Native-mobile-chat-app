import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import Friends from "../../../components/friends";
import Chats from "../../../components/chats";

const index = () => {
  const friends = [
    "Selina",
    "Gomez",
    "Angelina",
    "Monho",
    "Hirut",
    "Abigia",
    "Nujamin",
    "Meserer",
    "Kassahun",
    "Bezawit",
  ];
  const chats = [
    {
      name: "Abebe",
      recentMessage: "Hello",
    },
    {
      name: "Hawa",
      recentMessage: "Hey",
    },
    {
      name: "Melat",
      recentMessage: "How are you",
    },
    {
      name: "Sosena",
      recentMessage: "Where are you",
    },
    {
      name: "Nuhamin",
      recentMessage: "I will come",
    },
    {
      name: "Meseret",
      recentMessage: "Ok i will wait",
    },
    {
      name: "Abebe",
      recentMessage: "Hello",
    },
    {
      name: "Hawa",
      recentMessage: "Hey",
    },
    {
      name: "Melat",
      recentMessage: "How are you",
    },
    {
      name: "Sosena",
      recentMessage: "Where are you",
    },
    {
      name: "Nuhamin",
      recentMessage: "I will come",
    },
    {
      name: "Meseret",
      recentMessage: "Ok i will wait",
    },
    {
      name: "Abebe",
      recentMessage: "Hello",
    },
    {
      name: "Hawa",
      recentMessage: "Hey",
    },
    {
      name: "Melat",
      recentMessage: "How are you",
    },
    {
      name: "Sosena",
      recentMessage: "Where are you",
    },
    {
      name: "Nuhamin",
      recentMessage: "I will come",
    },
    {
      name: "Meseret",
      recentMessage: "Ok i will wait",
    },
  ];
  return (
    <SafeAreaView>
      <View style={{ padding: 15, gap: 10 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Find Friends</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            padding: 6,
            borderRadius: 10,
          }}
        >
          <EvilIcons name="search" size={24} color="black" />
          <TextInput placeholder="Search friend" style={{ fontSize: 18 }} />
        </View>
        {/*  */}
        <Friends friends={friends} />
        <Chats chats={chats} />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
