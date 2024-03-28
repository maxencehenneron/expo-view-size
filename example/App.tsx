import { ExpoViewSizeView } from "expo-view-size";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world</Text>
      <ExpoViewSizeView title="Hello from ExpoViewSize" />
      <Text>Goodbye world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
});
