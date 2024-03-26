import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const DrawerMenu = ({ currentUser, toggleMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleSelecteMenu = (id) => {
    setSelectedMenu(id);
    toggleMenu.setShowMenu(false);
  };

  const menuList = [
    {
      id: 0,
      name: "Home",
      icon: <Ionicons name="home-outline" size={30} color="black" />,
    },
    {
      id: 1,
      name: "Chats",
      icon: (
        <Ionicons name="chatbubble-ellipses-outline" size={30} color="black" />
      ),
    },
    {
      id: 2,
      name: "Location",
      icon: <Ionicons name="location-outline" size={30} color="black" />,
    },
    {
      id: 3,
      name: "Your Profile",
      icon: <FontAwesome name="user-o" size={30} color="black" />,
    },
    {
      id: 4,
      name: "Setting",
      icon: <Ionicons name="settings-outline" size={30} color="black" />,
    },
  ];
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: toggleMenu.showMenu ? 0 : "-100%",
        zIndex: 10,
        backgroundColor: "white",
        height: "100%",
        width: "70%",
      }}
    >
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_li3Z5HGwDECghpwW6cx_5M7ulIivewcZRA&usqp=CAU",
        }}
        style={{
          width: "100%",
          height: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          onPress={() => toggleMenu.setShowMenu(false)}
          name="arrowleft"
          size={30}
          color="black"
          style={{ position: "absolute", top: 10, left: 10 }}
        />
        <View>
          <Image
            source={{ uri: currentUser.profile_url }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 100,
            }}
          />
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            {currentUser.name}
          </Text>
        </View>
      </ImageBackground>

      {/* menu item */}
      <View style={{ padding: 15, gap: 20 }}>
        {menuList.map((menu, index) => (
          <Pressable
            key={menu.id}
            onPress={() => handleSelecteMenu(menu.id)}
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            {menu.icon}
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: selectedMenu == index ? "orange" : "black",
              }}
            >
              {menu.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({});
