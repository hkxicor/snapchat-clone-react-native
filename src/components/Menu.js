import React, { Component, PropTypes } from 'react'
import {
  ScrollView,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import {
  SET_HORIZONTAL_SCROLL,
} from '../actions'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScrollView: {
    flexDirection: 'row',
  },
  scrollViewVertical: {
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    width: window.width,
  },
  verticalItem: {
    flex: 1,
    height: window.height,
    width: window.width,
  }
})

class Menu extends Component {
  static PropTypes = {
    routes: PropTypes.array,
    horizontal: PropTypes.bool,
    initialIndex: PropTypes.number,
  }

  static defaultProps = {
    routes: [],
    horizontal: true,
    initialIndex: 0,
  }

  constructor(props) {
    super(props)
    this._scrollView = null
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    if (this.props.horizontal) {
      const offset = window.width * this.props.initialIndex
      this._scrollView.scrollTo({ x: offset, animated: false})
    } else {
      const offset = window.height * this.props.initialIndex
      this._scrollView.scrollTo({ y: offset, animated: false})
    }
  }

  renderScreen() {
    const { horizontal, routes } = this.props
    const itemStyle = horizontal ? styles.item : styles.verticalItem

    return routes.map((route, key) => (
      <View key={key} style={itemStyle}>
        <route.component />
      </View>
    ))
  }

  handleScroll(event){
    this.props.setHorizontalScroll(event.nativeEvent.contentOffset.x)
  }

  render() {
    const { horizontal } = this.props
    const scrollViewStyle = horizontal ? styles.scrollView : styles.scrollViewVertical

    return (
      <View style={styles.container}>
        <ScrollView
          ref={(c) => this._scrollView = c}
          onScroll={this.handleScroll}
          horizontal={horizontal}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={scrollViewStyle}
          scrollEventThrottle={32}
          bounce={false}
          directionalLockEnabled={true}
          removeClippedSubviews={true}
          >
            {this.renderScreen()}
          </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  horizontalScroll: state.app.horizontalScroll
})

const mapDispatchToProps = (dispatch) => ({
  setHorizontalScroll: (horizontalScroll) => {
    dispatch({type: SET_HORIZONTAL_SCROLL, horizontalScroll})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
