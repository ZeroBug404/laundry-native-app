import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const DressItem = ({ service }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: service.image }}
          />
        </View>
        <View>
          <Text style={{width:83,fontSize:17,fontWeight:'500',marginBottom:7}}>{service.name}</Text>
          <Text style={{width:60,color:'gray',fontSize:15}}>${service.price}</Text>
        </View>
        <Pressable style={{width:80}}>
            <Text style={{borderColor:'gray', borderWidth:0.8,marginVertical:10,color:'#088F8F', textAlign:'center',padding:5,borderRadius:5,fontSize:17,fontWeight:'bold'}}>Add</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
