import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={30} color="teal" />
            ) : (
              <Ionicons name="home-outline" size={30} color="teal" />
            ),
        }}
      />
      <Tabs.Screen
        name="network/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="people-sharp" size={30} color="teal" />
            ) : (
              <Ionicons name="people-outline" size={30} color="teal" />
            ),
        }}
      />
      <Tabs.Screen
        name="chats/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={30}
                color="teal"
              />
            ) : (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={30}
                color="teal"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-box"
                size={30}
                color="teal"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-box-outline"
                size={30}
                color="teal"
              />
            ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
