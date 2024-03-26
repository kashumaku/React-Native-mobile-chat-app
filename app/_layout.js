import React, { useEffect, useState } from "react";
import { Stack, router } from "expo-router";
import { supabase } from "../config/supabase";

const _layout = () => {
  // const [isLogedIn, setIsLogedIn] = useState(false);
  // const a = async () => {
  //   const res = await supabase.auth.getUser();

  //   console.log(res);
  // };
  // a();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="message/[conversation]" />
    </Stack>
  );
};

export default _layout;
