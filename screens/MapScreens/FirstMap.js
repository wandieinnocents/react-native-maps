import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView , { PROVIDER_GOOGLE }from "react-native-maps";
import { Marker, mapRef } from "react-native-maps";
import { useState } from "react";

export default function FirstMap() {
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
        provider={PROVIDER_GOOGLE}
        zoomEnabled
        style={styles.map}
        initialRegion={tokyoRegion}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker 
        coordinate={tokyoRegion} 
        image={require("./car.png")}
        title={"Spear Motors - $20"}
        subtitle='1234 Foo Drive'
        key="3"
        description={"BREAK PADS"}

        // pinColor="purple"
         />
        {/*marker to a nearby location */}
        <Marker
          coordinate={{
            latitude: 35.67718827145547,
            longitude: 139.6551462687426,
          }}
          // pinColor="green"
         
          image={require("./car.png")}
          title={"Toyota - $4"}
        description={"Oil Change"}
        />

        {/* another nearby location */}
        <Marker
          coordinate={{
            latitude: 35.6719827145542,
            longitude: 139.6551462687416,
          }}
          // pinColor="blue"
          title={"Toyota - $4"}
        description={"Oil Change"}
        />

        {/* another nearby location */}
        <Marker
          coordinate={{
            latitude: 35.673982715542,
            longitude: 139.6551462687416,
          }}
          // pinColor="blue"
          image={require("./gas-pump.png")}
          title={"Shelll - $2"}
        description={"V-Power"}
        />

        {/* another marker */}
        <Marker
          coordinate={{
            latitude: 35.674482715542,
            longitude: 139.651462687416,
          }}
          // pinColor="purple"
          image={require("./gas-pump.png")}
          title={"Total - $3"}
        description={"Petrol"}
        />

<Marker
          coordinate={{
            latitude: 35.6787992715542,
            longitude: 139.6531462611416,
          }}
          // pinColor="purple"
          image={require("./car.png")}
          title={"Hema Auto - $44"}
        description={"Engine Servicing"}
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
