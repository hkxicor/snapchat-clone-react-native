import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import BitmojiIcon from '../assets/bitmoji.png'
import CameraIcon from '../assets/camera.png'
import FlashIcon from '../assets/flash.png'
import SearchIcon from '../assets/search.png'



let icons = {
  bitmoji: BitmojiIcon,
  camera: CameraIcon,
  flash: FlashIcon,
  search: SearchIcon
}


const Icon = ({icon}) => (
  <View style={styles.container}>
    <Image source={icons[icon]} style={styles.image} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
  }
})

export default Icon
