import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import Header from './components/Header'
import SubMenu from './components/SubMenu'

let window = Dimensions.get('window')

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { backgroundColor } = this.props
    return (
      <View style={[styles.container, {backgroundColor}]}>
        <Header />
        <View style={styles.bottom}>
          <SubMenu />
        </View>
      </View>
    )
  }
}
styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    height: window.height - 60,
    alignSelf: 'flex-end',
    width: window.width,
  },
})

const mapStateToProps = state => ({
  backgroundColor: state.app.backgroundColor
})

export default connect(mapStateToProps)(App)
