import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import MenuItem from "./Menuitems";

const Fooditem = ({ item }) => {
  const data = [item];
  return (
    <View>
      {data?.map((item, index) => (
        <>
          <Pressable
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={{fontSize:19,fontWeight:"500"}}>
              {item?.name}({item?.items?.length})
            </Text>
            <Entypo name="chevron-down" size={26} color="black" />
          </Pressable>
          {item?.items?.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </>
      ))}
    </View>
  );
};

export default Fooditem;

const styles = StyleSheet.create({});
