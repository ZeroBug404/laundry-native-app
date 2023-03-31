import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Services = () => {
  // services data code
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
  ];

  return (
    <View>
      <Text style={{padding:10}}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable style={{margin:10, backgroundColor:'white', padding:20,borderRadius:7,justifyContent:'center',alignItems:'center'}} key={index}>
            <Image style={{width:70, height:70}} source={{ uri: service.image }} />
            <Text style={{textAlign:'center'}}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
