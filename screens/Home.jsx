import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Products from "../components/Products";

const Home = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Loading your location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert("Location is not enabled", "Please enable the location", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
        // { cancelable: false }
      ]);
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission denied", "Allow the app to use the location", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
        // { cancelable: false }
      ]);
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log('coords:',coords);
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log('res:',response);

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#F0F0F0',flex:1,marginTop:30}}>
      {/* Location and Profile */}
      <View style={{flexDirection:'row',alignItems:"center",padding:10}}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{fontSize: 18, fontWeight:"600"}}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable style={{marginLeft:"auto", marginRight:7}}>
          <Image style={{width:40,height:40,borderRadius:20}} source={{uri:"https://yt3.ggpht.com/yti/AHXOFjUzooHzjIeAgX1koLiXpN5hXfntq3lFYalq1EZ-=s88-c-k-c0x00ffffff-no-rj-mo"}}/>
        </Pressable>
      </View>

      {/* Search Bar */}
      <SearchBar />

      {/* Banner Carousel */}
      <Carousel/>

      {/* Services */}
      <Services/>

      {/* Products */}
      <Products/>

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
