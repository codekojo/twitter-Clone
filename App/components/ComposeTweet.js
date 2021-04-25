import React from 'react';

import {TouchableOpacity, Image, StyleSheet} from 'react-native';

function ComposeTweet() {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.tweet}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/images/metweet.png')}
      />
    </TouchableOpacity>
  );
}

export default ComposeTweet;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  tweet: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'red',
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
});
