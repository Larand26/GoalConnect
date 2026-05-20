import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import type { Event } from "../data/events";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function formatRemaining(ms: number) {
  if (ms <= 0) return "00:00:00";
  const total = Math.floor(ms / 1000);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export default function Event(props: { event: Event }) {
  const { event } = props;
  const [remaining, setRemaining] = useState(() =>
    formatRemaining(event.date.getTime() - Date.now()),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(formatRemaining(event.date.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [event.date]);

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.location}>{event.location}</Text>

        <View style={styles.countdownLabelRow}>
          <View style={styles.countdownBox}>
            <Text style={styles.countdownLabel}>Começa em: </Text>
            <Text style={styles.countdownText}>{remaining}</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <MaterialCommunityIcons name="account-group" size={20} />
          <Text style={styles.peopleText}>
            {event.peoples} torcedores confirmados
          </Text>
        </View>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={event.image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f7efcc",
    borderRadius: 10,
    padding: 12,
  },
  info: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    color: "#042c2b",
    fontSize: 20,
    marginBottom: 4,
    fontFamily: "Bebas-Regular",
  },
  location: {
    color: "#0a3b39",
    fontSize: 13,
    marginBottom: 8,
  },
  countdownLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  countdownLabel: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    marginRight: 8,
  },
  countdownBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#0fb7a1",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    minWidth: 110,
    alignItems: "center",
  },
  countdownText: {
    color: "white",
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: "Digital-Numbers-Regular",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  peopleText: {
    color: "#042c2b",
    marginLeft: 8,
    fontSize: 13,
  },
  imageWrapper: {
    width: 110,
    aspectRatio: 1,
    objectFit: "cover",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ddd",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
