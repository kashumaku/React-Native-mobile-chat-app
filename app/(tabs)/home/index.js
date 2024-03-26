import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLoggedInUser from "../../../hooks/useLoggedInUser";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../../../hooks/useFetch";
import DrawerMenu from "../../../components/drawerMenu";
import { useState } from "react";
import AddPost from "../../../components/addPost";
import Posts from "../../../components/posts";

const index = () => {
  const { currentUser } = useLoggedInUser();
  const { isLoading, error } = useFetch("users");
  const [showMenu, setShowMenu] = useState(false);

  const postData = [
    {
      thumbnail:
        "https://images.pexels.com/photos/1587604/pexels-photo-1587604.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 98,
      username: "Kassahun",
      createdAt: "10 days",
      profile:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/68594/pexels-photo-68594.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 48,
      username: "Biniaym",
      createdAt: "25 minuts",

      profile:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/3579460/pexels-photo-3579460.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 91,
      username: "Sosena",
      createdAt: "3 hours",

      profile:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 89,
      username: "Hina",
      createdAt: "2 weaks",

      profile:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 61,
      username: "Loronte",
      createdAt: "2 monthes",

      profile:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/728824/pexels-photo-728824.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 47,
      username: "Emina",
      createdAt: "6 days",

      profile:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/17801580/pexels-photo-17801580/free-photo-of-flying-airbus-a340.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 67,
      username: "Bingo",
      createdAt: "14 minutes",

      profile:
        "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/17485148/pexels-photo-17485148/free-photo-of-young-women-in-ethiopian-soccer-club-fan-t-shirts.jpeg?auto=compress&cs=tinysrgb&w=300",
      likes: 41,
      username: "Yodiana",
      createdAt: "5 days",

      profile:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="teal"
            style={{
              backgroundColor: "lightgray",
              position: "absolute",
              top: 0,
              zIndex: 30,
              width: "100%",
              height: "100%",
            }}
          />
        )}
        <DrawerMenu
          currentUser={currentUser}
          toggleMenu={{ setShowMenu, showMenu }}
        />
        {/* header */}
        <View>
          {error ? (
            <Text>{error}</Text>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 2,
                borderBottomColor: "gray",
                backgroundColor: "lightgray",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            >
              <AntDesign
                name="menuunfold"
                size={30}
                color="black"
                onPress={() => setShowMenu(true)}
              />
              <Text style={{ fontWeight: "bold", fontSize: 25, color: "gray" }}>
                Hi chat
              </Text>
              <Image
                source={{ uri: currentUser.profile_url }}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "cover",
                  borderRadius: 100,
                }}
              />
            </View>
          )}
        </View>
        {/* main */}
        <Pressable
          onPress={() => setShowMenu(false)}
          style={{ marginTop: 3, padding: 15 }}
        >
          <AddPost />
          <Posts postData={postData} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
