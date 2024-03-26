import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Friends = ({ friends }) => {
  return (
    <FlatList
      data={friends}
      horizontal
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Link
          href={`/message/${item}`}
          style={{ marginRight: 10, alignItems: "center", height: 120 }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600",
              }}
              style={{
                width: 65,
                height: 65,
                resizeMode: "cover",
                borderRadius: 100,
              }}
            />
            <Text>{item}</Text>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: "green",
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "white",
                position: "absolute",
                top: 50,
                right: 5,
              }}
            />
          </View>
        </Link>
      )}
    />
  );
};

export default Friends;

const styles = StyleSheet.create({});
