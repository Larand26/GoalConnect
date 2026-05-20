import { ScrollView } from "react-native";
import Event from "../../components/Event";
import { events } from "../../data/events";
import { styles } from "./EventScreen.styles";

export default function EventScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ScrollView>
  );
}
