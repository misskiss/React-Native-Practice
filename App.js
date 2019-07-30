import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { StyleSheet, Text, View, Image } from 'react-native';
import Counter from "./Counter";

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    <Image style={{width: 250, height: 250}} source={{uri: 'https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg'}}/>
      <Text>blep</Text>
      <Counter />
    </View>
    </Provider>
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
