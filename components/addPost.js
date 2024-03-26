import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddPost = () => {
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: "lightgray",
        paddingBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Write something..."
          style={{
            flex: 1,
            backgroundColor: "white",
            fontSize: 20,
            padding: 5,
            borderRadius: 10,
          }}
        />
        <Ionicons name="images" size={34} color="lightgreen" />
      </View>
      <Pressable
        style={{
          backgroundColor: "teal",
          alignItems: "center",
        }}
      >
        {/* <Ionicons name="send" size={34} color="blue" /> */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
            color: "white",
          }}
        >
          Send
        </Text>
      </Pressable>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({});
