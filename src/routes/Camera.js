import React,{ Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
})

const Camera = () => {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  backgroundColor: state.app.backgroundColor
})

export default connect(mapStateToProps)(Camera);
