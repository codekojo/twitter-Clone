import React from 'react';
import {Image, StyleSheet} from 'react-native';

function Timeline() {
  return (
    <Image
      resizeMode="cover"
      style={styles.image}
      source={require('../assets/images/star.png')}
    />
  );
}

export default Timeline;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
