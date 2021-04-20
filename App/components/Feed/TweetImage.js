import React from 'react';
import {Image, View} from 'react-native';

function TweetImage({source}) {
  return (
    <View style={{marginVertical: 5}}>
      <Image
        source={{
          uri: source,
        }}
        resizeMode="cover"
        style={{height: 200, width: '100%', borderRadius: 20}}
      />
    </View>
  );
}

export default TweetImage;
