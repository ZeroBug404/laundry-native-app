import React from "react";
import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  // image carousel data
  const images = [
    "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];
  return (
    <View styles={{}}>
      <SliderBox images={images} autoplay circleloop dotColor={'#13274F'} inactiveDotColor="#90A4AE" ImageComponentStyle={{
        width: '94%',
        borderRadius:6,
      }}/>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
