import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView , { PROVIDER_GOOGLE }from "react-native-maps";
import { Marker, mapRef } from "react-native-maps";
import { useState } from "react";
import FirstMap from './screens/MapScreens/FirstMap';


export default function App() {
  
  
  return (
   <FirstMap />
  );
}
