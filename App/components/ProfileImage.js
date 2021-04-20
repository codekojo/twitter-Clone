import React from 'react';
import {Image} from 'react-native';
import defaultStyle from '../config/defaultStyle';

function ProfileImage({uris}) {
  return (
    <Image
      source={{
        uri: uris,
      }}
      resizeMode="contain"
      style={defaultStyle.imageProfile}
    />
  );
}

export default ProfileImage;
