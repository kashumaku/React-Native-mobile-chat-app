import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Recommendation = () => {
  const connect = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: 20,
          paddingBottom: 80,
        }}
      >
        {connect.map((c) => (
          <View
            style={{
              borderWidth: 2,
              borderColor: "lightgray",
              width: "45%",
              borderRadius: 10,
              alignItems: "center",
              paddingVertical: 10,
              gap: 10,
            }}
          >
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
              }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
                borderRadius: 100,
              }}
            />
            <Text style={{ color: "gray", fontSize: 20, fontWeight: "bold" }}>
              Abigia Nuham
            </Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Pressable
                style={{
                  backgroundColor: "skyblue",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 17, fontWeight: "bold" }}
                >
                  Send request
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Recommendation;

const styles = StyleSheet.create({});
