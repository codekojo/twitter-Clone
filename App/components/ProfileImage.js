import React from 'react';
import {Image, View} from 'react-native';
import defaultStyle from '../config/defaultStyle';

function ProfileImage({uris}) {
  return (
    <Image
      source={{
        uri: uris,
      }}
      resizeMode="cover"
      style={defaultStyle.imageProfile}
    />
  );
}

export default ProfileImage;
