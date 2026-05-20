import { StyleSheet } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  type MapStyleElement,
} from "react-native-maps";

const mapStyle: MapStyleElement[] = [
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#013750" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#013750" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [{ color: "#013750" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#013750" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#2C6B74" }],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [{ color: "#2C6B74" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#2C6B74" }],
  },
  {
    featureType: "poi.business",
    elementType: "geometry",
    stylers: [{ color: "#2C6B74" }],
  },
];

export default function FanMap() {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0005,
    longitudeDelta: 0.0005,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={region}
      customMapStyle={mapStyle}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
  },
});
