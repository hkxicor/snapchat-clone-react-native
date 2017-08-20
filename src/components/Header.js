import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Icon from './Icon'

const styles = StyleSheet.create({
  container: {
    width: window.width,
    marginTop: 20,
    height: 50,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingBottom: 10,
  },
  searchContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
})

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon icon={'bitmoji'} />
      <View style={styles.searchContainer}>
      </View>
      <Icon icon={'flash'} />
      <Icon icon={'camera'} />
    </View>
  )
}

export default Header
