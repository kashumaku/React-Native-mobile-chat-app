import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";

const Chats = ({ chats }) => {
  const { isLoading, data } = useFetch("users");

  const router = useRoute();
  if (isLoading) return <ActivityIndicator size="large" color="teal" />;
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Link
          href={`/message/${item.user_id}`}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 5,
            margin: 5,
            padding: 5,
            backgroundColor: "#fafdff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=600",
              }}
              style={{
                width: 60,
                height: 60,
                resizeMode: "cover",
                borderRadius: 100,
              }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ color: "gray" }}>{item.recentMessage}</Text>
            </View>
          </View>
        </Link>
      )}
    />
  );
};

export default Chats;

const styles = StyleSheet.create({});
