import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Posts = ({ postData }) => {
  return (
    <FlatList
      data={postData}
      keyExtractor={(item) => item.profile}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={{
            borderWidth: 1,
            borderColor: "lightgray",
            marginBottom: 15,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: item.thumbnail,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: 10,
            }}
          >
            <Image
              source={{
                uri: item.profile,
              }}
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />
            <View>
              <Text>{item.username}</Text>
              <Text>{item.createdAt} ago</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 10,
                paddingRight: 30,
                flex: 1,
              }}
            >
              <Text>{item.likes}</Text>
              <AntDesign
                name="like2"
                size={24}
                color="black"
                style={{ marginRight: 20 }}
              />
              <FontAwesome6 name="comment-alt" size={24} color="black" />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default Posts;

const styles = StyleSheet.create({});
