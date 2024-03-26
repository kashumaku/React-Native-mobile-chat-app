import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const ConnectRequest = () => {
  const connect = [1, 2, 3, 4, 5, 6];
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
                uri: "https://images.pexels.com/photos/19254446/pexels-photo-19254446/free-photo-of-couple-embracing-by-river-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
                  Accept
                </Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "gray",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 17, fontWeight: "bold" }}
                >
                  Reject
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ConnectRequest;

const styles = StyleSheet.create({});
