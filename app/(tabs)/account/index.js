import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../../config/supabase";

const index = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
