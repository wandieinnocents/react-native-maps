import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker, mapRef } from "react-native-maps";
import { useState } from "react";
export default function App() {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // tokyo
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={tokyoRegion}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={tokyoRegion} 
          pinColor="green"
        />
        {/*marker to a nearby location */}
        <Marker
          coordinate={{
            latitude: 35.67714827145547,
            longitude: 139.6551462687426,
          }}
        />

        

        {/* another nearby location */}
        <Marker
          coordinate={{
            latitude: 35.6714827145542,
            longitude: 139.6551462687416,
          }}
        />

         {/* another nearby location */}
         <Marker
          coordinate={{
            latitude: 35.670482715542,
            longitude: 139.6551462687416,
          }}
        />
      </MapView>
    </View>
  );
}

//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
