import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import AdInspector from 'react-native-ad-inspector';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Open Ad Inspector"
        onPress={() => {
          AdInspector.open();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
