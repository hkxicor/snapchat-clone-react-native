import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Menu from '../components/Menu'

let window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})

const StoriesContent = () => {
  return (
    <View style={styles.container}>
      <Text>Stories</Text>
    </View>
  );
}

const Stories = () => {
  return (
    <Menu
      routes={[
        { component: StoriesContent},
      ]}
      initialIndex={0}
      horizontal={false}
    />
  )
}

export default Stories;
