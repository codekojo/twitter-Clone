import React from 'react';
import {Image, View, Dimensions} from 'react-native';

function TweetImage() {
  const width = Dimensions.get('window').width;

  return (
    <Image
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0UvdagP7j0bZTGEwlc5JAMzBLDqKvfeQWw&usqp=CAU',
      }}
      resizeMode="cover"
      style={{height: 200, width: '100%', borderRadius: 20}}
    />
  );
}

export default TweetImage;
