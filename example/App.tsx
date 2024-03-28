import { StyleSheet, Text, View } from 'react-native';

import * as ExpoViewSize from 'expo-view-size';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoViewSize.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
