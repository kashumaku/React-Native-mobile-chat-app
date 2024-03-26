import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { supabase } from "../config/supabase";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isLogedIn = async () => {
      const res = await supabase.auth.getUser();
      !res?.error && router.replace("/home");
    };
    isLogedIn();
  }, []);

  const handleLogin = async () => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (res.error) notify("Invalid credential");
      else router.replace("/home");
    } catch (err) {
      notify("Something went wrong");
    }
  };

  const notify = (notfi) => {
    setTimeout(() => {
      setError("");
    }, 3000);
    setError(notfi);
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
        source={require("../assets/logo/logo.jpg")}
        style={{
          resizeMode: "contain",
          width: 150,
          height: 150,
          borderRadius: 100,
        }}
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
          Sign in to your Account
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
              onChangeText={(text) => setpassword(text)}
              placeholder="enter your Password"
              secureTextEntry
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 20,
              }}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Keep signed in</Text>
            <Text style={{ color: "#3560bf" }}>forget Password?</Text>
          </View>
          <Pressable
            onPress={handleLogin}
            style={{
              backgroundColor: "#3560bf",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 5,
              marginTop: 70,
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
              Sign in
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.navigate("/signup")}
            style={{ flexDirection: "row", gap: 10, alignSelf: "center" }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Don't have an Account?
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "#3560bf",
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
