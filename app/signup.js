import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import useFetch from "../hooks/useFetch";
import { supabase } from "../config/supabase";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [error, setError] = useState("");
  const notify = (notif) => {
    setTimeout(() => {
      setError("");
    }, 3000);
    setError(notif);
  };

  const handleSignup = async () => {
    try {
      // check user exist
      const existUser = await supabase
        .from("users")
        .select()
        .eq("email", email);
      if (existUser.data.length > 0) return notify("User Already exists");
      // sign up
      const res = await supabase.auth.signUp({
        email,
        password,
      });
      // add to user table
      const insertedUser = await supabase
        .from("users")
        .insert([
          {
            name,
            email: email.trim(),
            profile_url: profileUrl,
            user_id: res?.data?.user?.id,
          },
        ])
        .select();
      if (insertedUser.data?.user) router.replace("/home");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 70,
        flex: 1,
      }}
    >
      <Image
        source={require("../assets/logo/linkdin.png")}
        style={{ resizeMode: "contain", width: "80%", height: 50 }}
      />
      <KeyboardAvoidingView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 30,
            textAlign: "center",
          }}
        >
          Sign up to your Account
        </Text>
        {error && (
          <Text
            style={{
              color: "red",
              textAlign: "center",
              fontSize: 24,
              position: "absolute",
              top: 70,
              right: 0,
              left: 0,
              margin: "auto",
            }}
          >
            {error}
          </Text>
        )}
        <View style={{ gap: 30, marginTop: 50 }}>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <FontAwesome5
              name="user-alt"
              size={24}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />
            <TextInput
              onChangeText={(text) => setName(text)}
              placeholder="enter your full name"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 20,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />

            <TextInput
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your Email"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 20,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder="enter your Password"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 20,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Ionicons
              name="image"
              size={24}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />
            <TextInput
              onChangeText={(text) => setProfileUrl(text)}
              placeholder="enter your Image URL"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 20,
              }}
            />
          </View>

          <Pressable
            onPress={handleSignup}
            style={{
              backgroundColor: "#3560bf",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 5,
              width: 300,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Sign up
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.navigate("/login")}
            style={{ flexDirection: "row", gap: 10, alignSelf: "center" }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Already have an Account?
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "#3560bf",
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({});
