import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import useLoggedInUser from "../../hooks/useLoggedInUser";
import { supabase } from "../../config/supabase";

const conversation = () => {
  const [textMessage, setTextMessage] = useState("");
  const [prevConcerstion, setPrevConversation] = useState([]);
  const { conversation } = useLocalSearchParams();
  const selectedUserId = conversation;
  const { currentUser } = useLoggedInUser();
  const chatId = currentUser.user_id + selectedUserId;

  const handleSend = async () => {
    console.log("newmmmm", newMessage);
    try {
      const { error, data } = await supabase
        .from("messages")
        .insert([
          {
            chat_id: chatId,
            text: textMessage,
            image_url: "",
            sender_id: currentUser.user_id,
          },
        ])
        .select();
      console.log(error, data);
    } catch (err) {
      console.log("error in sending message", err.message);
    }
  };

  const getPrevConver = async () => {
    const { error, data } = await supabase
      .from("messages")
      .select()
      .like("chat_id", `%${currentUser.user_id}%`);
    console.log("messages", data);

    setPrevConversation(data);
  };
  useEffect(() => {
    getPrevConver();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "teal",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <View style>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {conversation}
          </Text>
          <Text
            style={{ color: "lightgray", fontSize: 15, fontWeight: "bold" }}
          >
            online
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Ionicons name="call-sharp" size={24} color="white" />
          <FontAwesome name="video-camera" size={24} color="white" />
          <MaterialIcons name="more-horiz" size={24} color="white" />
        </View>
      </View>
      {/* Message body */}
      <View>
        <View>
          <Text>No Message with {conversation}</Text>
        </View>
        {/* input */}
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            paddingHorizontal: 10,
            alignItems: "center",
            backgroundColor: "lightgray",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              padding: 5,
            }}
          >
            <Entypo name="emoji-happy" size={24} color="gray" />
            <TextInput
              onChangeText={(text) => setTextMessage(text)}
              placeholder="Write your message..."
              style={{ flex: 1, padding: 3, fontSize: 17 }}
            />
            <Pressable android_ripple={{ color: "blue" }} onPress={handleSend}>
              <MaterialCommunityIcons
                name="arrow-right-bold-circle"
                size={34}
                color="teal"
              />
            </Pressable>
          </View>
          <FontAwesome name="image" size={24} color="black" />
          <FontAwesome
            name="microphone"
            size={24}
            color="white"
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "teal",
              padding: 3,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default conversation;

const styles = StyleSheet.create({});
